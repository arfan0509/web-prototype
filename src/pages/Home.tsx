import React, { useEffect, useState } from "react";
import axios from "axios";
import crypto from "crypto-js";
import Navbar from "../components/Navbar";
import InteractiveCard from "../components/InteractiveCard";

interface DecryptedData {
  whcode: string;
  warehouse: string;
}

const Home: React.FC = () => {
  const [decryptedMessage, setDecryptedMessage] = useState<DecryptedData[]>([]);
  const [totalRecords, setTotalRecords] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const credentials = {
        url: import.meta.env.VITE_API_URL,
        apikey: import.meta.env.VITE_API_KEY,
        password: import.meta.env.VITE_PASSWORD,
        uniqueid: import.meta.env.VITE_UNIQUE_ID,
        timestamp: new Date().toISOString(),
      };

      const message = {
        datacore: import.meta.env.VITE_DATACORE,
        dataclass: import.meta.env.VITE_DATACLASS,
        recordsperpage: import.meta.env.VITE_RECORDSPERPAGE,
        currentpageno: import.meta.env.VITE_CURRENTPAGENO,
        condition: import.meta.env.VITE_CONDITION,
        order: import.meta.env.VITE_ORDER,
        recordcount: import.meta.env.VITE_RECORDCOUNT,
        fields: import.meta.env.VITE_FIELDS,
        userid: import.meta.env.VITE_USERID,
        groupid: import.meta.env.VITE_GROUPID,
        businessid: import.meta.env.VITE_BUSINESSID,
      };

      const privateMsgStr = JSON.stringify(message);

      const key = crypto.enc.Utf8.parse(credentials.password);
      const iv = crypto.enc.Utf8.parse(credentials.uniqueid.substring(0, 16));

      const encrypted = crypto.AES.encrypt(privateMsgStr, key, {
        iv: iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7,
      });

      const encryptedHex = encrypted.ciphertext
        .toString(crypto.enc.Hex)
        .toUpperCase();

      const publicMsg = {
        apikey: credentials.apikey,
        uniqueid: credentials.uniqueid,
        timestamp: credentials.timestamp,
        message: encryptedHex,
      };

      try {
        const response = await axios.post("/api/JDataClassQuery", publicMsg, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responseData = response.data;

        if (responseData && responseData.message) {
          const encryptedResponseMessage = responseData.message;

          const encryptedData = crypto.enc.Hex.parse(encryptedResponseMessage);
          const decrypted = crypto.AES.decrypt(
            { ciphertext: encryptedData },
            key,
            {
              iv: iv,
              mode: crypto.mode.CBC,
              padding: crypto.pad.Pkcs7,
            }
          );

          const decryptedStr = decrypted.toString(crypto.enc.Utf8);

          const jsonData = JSON.parse(decryptedStr);

          if (jsonData.totalrecords) {
            setTotalRecords(jsonData.totalrecords);
          }

          if (Array.isArray(jsonData.data)) {
            setDecryptedMessage(jsonData.data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 font-sans">
        <div className="mt-4">
          <h1 className="text-2xl font-bold">All Data</h1>
          {totalRecords !== null && (
            <p className="text-lg font-medium text-gray-700 mb-4">
              Total Records: {totalRecords}
            </p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {decryptedMessage.map((item, index) => {
              // Menghapus spasi dari whcode dan menggunakan URL relatif dari folder public
              const trimmedWhcode = item.whcode.trim();
              const imagePath = `/images/${trimmedWhcode}.jpg`;

              return (
                <InteractiveCard
                  key={index}
                  image={imagePath}
                  whcode={trimmedWhcode}
                  warehouse={item.warehouse}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
