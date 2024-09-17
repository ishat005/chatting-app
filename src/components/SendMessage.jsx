import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  container: `h-[460px] w-full flex flex-col relative overflow-y-auto bottom-0 mt-[-320px]`,
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const user = auth.currentUser;
    if (user) {
      const { uid, displayName } = user;
      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });

      setInput("");
      console.log(scroll.current);
      scroll.current.scrollTop = scroll.current.scrollHeight;
    } else {
      console.error("User is not authenticated");
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={sendMessage} className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Type a message..."
        />
        <button className={style.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
