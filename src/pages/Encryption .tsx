import React, { useState } from "react";
import axios from "axios";
import crypto from "crypto-js";
import moment from "moment";
import Navbar from "../components/Navbar";

interface Credential {
  url: string;
  apikey: string;
  password: string;
  uniqueid: string;
  timestamp: string;
}

interface Message {
  datacore: string;
  dataclass: string;
  recordsperpage: string;
  currentpageno: string;
  condition: string;
  order: string;
  recordcount: string;
  fields: string;
  userid: string;
  groupid: string;
  businessid: string;
}

const Encryption: React.FC = () => {
  const [credentials, setCredentials] = useState<Credential>({
    url: "http://sereg.alcorsys.com:8989/JDataClassQuery",
    apikey: "06EAAA9D10BE3D4386D10144E267B681",
    password: "A9CCF340D9A490104AC5159B8E1CBXXX",
    uniqueid: "JFKlnUZyyu0MzRqj",
    timestamp: moment().format("YYYY/MM/DD HH:mm:ss"),
  });

  const [message, setMessage] = useState<Message>({
    datacore: "core_002",
    dataclass: "wareHouse",
    recordsperpage: "0",
    currentpageno: "0",
    condition: "whtype='SL'",
    order: "warehouse",
    recordcount: "yes",
    fields: "whcode, warehouse",
    userid: "ganiadi@thepyxis.net",
    groupid: "XCYTUA",
    businessid: "PJLBBS",
  });

  const [privateMessage, setPrivateMessage] = useState<string>("");
  const [encryptedMessage, setEncryptedMessage] = useState<string>("");
  const [publicMessage, setPublicMessage] = useState<string>("");
  const [decryptedMessage, setDecryptedMessage] = useState<string>("");
  const [publicResponse, setPublicResponse] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleCredentialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    // Hanya ambil data dari message untuk privateMessage
    const privateMsg = {
      datacore: message.datacore,
      dataclass: message.dataclass,
      recordsperpage: message.recordsperpage,
      currentpageno: message.currentpageno,
      condition: message.condition,
      order: message.order,
      recordcount: message.recordcount,
      fields: message.fields,
      userid: message.userid,
      groupid: message.groupid,
      businessid: message.businessid,
    };

    const privateMsgStr = JSON.stringify(privateMsg);

    // Ambil kunci dan IV dari password dan uniqueid
    const key = crypto.enc.Utf8.parse(credentials.password); // Kunci dari password
    const iv = crypto.enc.Utf8.parse(credentials.uniqueid.substring(0, 16)); // IV dari uniqueid (16 karakter pertama)

    // Enkripsi menggunakan AES-256-CBC
    const encrypted = crypto.AES.encrypt(privateMsgStr, key, {
      iv: iv,
      mode: crypto.mode.CBC,
      padding: crypto.pad.Pkcs7,
    });

    const encryptedHex = encrypted.ciphertext
      .toString(crypto.enc.Hex)
      .toUpperCase();

    const fullEncryptedMessage = encryptedHex;

    const publicMsg = {
      apikey: credentials.apikey,
      uniqueid: credentials.uniqueid,
      timestamp: credentials.timestamp,
      message: fullEncryptedMessage,
    };

    setPrivateMessage(JSON.stringify(privateMsg, null, 2));
    setEncryptedMessage(fullEncryptedMessage);
    setPublicMessage(JSON.stringify(publicMsg, null, 2));

    try {
      const response = await axios.post("/api/JDataClassQuery", publicMsg, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = response.data;
      setPublicResponse(JSON.stringify(responseData, null, 2));

      if (responseData && responseData.message) {
        setResponseMessage(responseData.message);
      } else {
        setResponseMessage("Message field not found in response.");
      }
    } catch (error) {
      setPublicResponse(`Error: ${error}`);
      setResponseMessage("");
    }
  };

  const decryptMessage = (encryptedMessage: string) => {
    const encrypted = crypto.enc.Hex.parse(encryptedMessage);
    const key = crypto.enc.Utf8.parse(credentials.password); // Kunci yang sama digunakan untuk enkripsi
    const iv = crypto.enc.Utf8.parse(credentials.uniqueid); // IV yang sama

    const decrypted = crypto.AES.decrypt({ ciphertext: encrypted }, key, {
      iv: iv,
      mode: crypto.mode.CBC,
      padding: crypto.pad.Pkcs7,
    });

    const decryptedStr = decrypted.toString(crypto.enc.Utf8);
    console.log("Decrypted String:", decryptedStr); // Debug statement

    // Cek apakah hasil dekripsi valid JSON
    try {
      const jsonData = JSON.parse(decryptedStr);
      setDecryptedMessage(JSON.stringify(jsonData, null, 2));
    } catch (e) {
      console.error("Decrypted string is not valid JSON:", decryptedStr);
      setDecryptedMessage("Error: Invalid JSON format.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 font-sans">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="mb-6 font-bold text-2xl">User Credential</h2>
            <label className="block mb-2">URL</label>
            <input
              name="url"
              value={credentials.url}
              onChange={handleCredentialChange}
              placeholder="URL"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">API Key</label>
            <input
              name="apikey"
              value={credentials.apikey}
              onChange={handleCredentialChange}
              placeholder="API Key"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Password</label>
            <input
              name="password"
              value={credentials.password}
              onChange={handleCredentialChange}
              placeholder="Password"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Unique ID</label>
            <input
              name="uniqueid"
              value={credentials.uniqueid}
              onChange={handleCredentialChange}
              placeholder="Unique ID"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Timestamp</label>
            <input
              name="timestamp"
              value={credentials.timestamp}
              onChange={handleCredentialChange}
              placeholder="Timestamp"
              className="border p-2 mb-4 w-full"
            />
          </div>
          <div>
            <h2 className="mb-6 font-bold text-2xl">Message</h2>
            <label className="block mb-2">Data Core</label>
            <input
              name="datacore"
              value={message.datacore}
              onChange={handleMessageChange}
              placeholder="Data Core"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Data Class</label>
            <input
              name="dataclass"
              value={message.dataclass}
              onChange={handleMessageChange}
              placeholder="Data Class"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Records per Page</label>
            <input
              name="recordsperpage"
              value={message.recordsperpage}
              onChange={handleMessageChange}
              placeholder="Records per Page"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Current Page</label>
            <input
              name="currentpage"
              value={message.currentpageno}
              onChange={handleMessageChange}
              placeholder="Current Page"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Condition</label>
            <input
              name="condition"
              value={message.condition}
              onChange={handleMessageChange}
              placeholder="Condition"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Order</label>
            <input
              name="order"
              value={message.order}
              onChange={handleMessageChange}
              placeholder="Order"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Recordcount</label>
            <input
              name="recordcount"
              value={message.recordcount}
              onChange={handleMessageChange}
              placeholder="Recordcount"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Fields</label>
            <input
              name="fields"
              value={message.fields}
              onChange={handleMessageChange}
              placeholder="Fields"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">User ID</label>
            <input
              name="userid"
              value={message.userid}
              onChange={handleMessageChange}
              placeholder="User ID"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Group ID</label>
            <input
              name="groupid"
              value={message.groupid}
              onChange={handleMessageChange}
              placeholder="Group ID"
              className="border p-2 mb-4 w-full"
            />
            <label className="block mb-2">Business ID</label>
            <input
              name="businessid"
              value={message.businessid}
              onChange={handleMessageChange}
              placeholder="Business ID"
              className="border p-2 mb-4 w-full"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={handleSend}
            className="bg-gray-900 text-white font-semibold rounded-lg shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 py-2 px-16"
          >
            Send
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Output</h2>
          <div className="mb-4">
            <h3 className="font-bold">Private Message</h3>
            <textarea
              readOnly
              value={privateMessage}
              className="w-full h-32 border p-2 mb-2  text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Encrypted Message</h3>
            <textarea
              readOnly
              value={encryptedMessage}
              className="w-full h-32 border p-2 mb-2  text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Public Message</h3>
            <textarea
              readOnly
              value={publicMessage}
              className="w-full h-32 border p-2 mb-2  text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Public Response</h3>
            <textarea
              readOnly
              value={publicResponse}
              className="w-full h-32 border p-2 mb-2  text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Message from Response</h3>
            <textarea
              readOnly
              value={responseMessage}
              className="w-full h-16 border p-2  text-black rounded-md"
            />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Decrypt Message</h2>
          <textarea
            id="decryptInput"
            placeholder="Encrypted Message"
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={() =>
              decryptMessage(
                (document.getElementById("decryptInput") as HTMLInputElement)
                  .value
              )
            }
            className="bg-gray-900 text-white font-semibold rounded-lg shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 py-2 px-4"
          >
            Decrypt
          </button>
          <textarea
            readOnly
            value={decryptedMessage}
            className="w-full h-32 border p-2 mt-2"
          />
        </div>
      </div>
    </>
  );
};

export default Encryption;
