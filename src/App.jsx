import { useState } from "react";
import "./styles.css";

import React from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const passCode = "1001";

  const [userInput, setUserInput] = useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: ""
  });

  const [verified, setVerified] = useState(undefined);

  /* Challenge

	Doğrulama kodu formu henüz kullanıcının girdisini kontrol etmiyor. Sizin göreviniz aşağıdaki gibi kurulumu tamamlamaktır: 
	
		1. Kullanıcı parola input'larından birine bir karakter yazdığında, userInput state nesnesinin ilgili özelliği, diğer özellikler korunarak güncellenmelidir. Özellik adlarının ve girdilerin adlarının birbiriyle eşleştiğine dikkat edin (charOne, charTwo, vb.)
		   
		2. Kullanıcı gönder butonuna tıkladığında, bir gönderme işleme fonksiyonu sayfanın yenilenmesini engellemeli ve userInput'ta saklanan dört karakterin kombinasyonunun passCode değerine eşit olup olmadığını kontrol etmelidir (yukarıdaki 7. satırda bildirilmiştir).
		   
		3. Eşleşiyorlarsa, verified state değeri true olarak ayarlanmalıdır. Aksi takdirde false olarak ayarlanmalıdır. 
		   
		4. Kodunuz mümkün olduğunca DRY olmalıdır
*/

const submit = (e)=> {
  e.preventDefault()
  const password=Object.values(userInput).join("")
  if(password===passCode) {
    setVerified(true)
  }
  else{
    setVerified(false)
  }

}


  return (
    <div className="wrapper">
      <Header />

      <form>
        <Message status={verified} />

        <div>
          <input required type="password" name="charOne" maxLength="1" value={userInput.charOne} onChange={e=>setUserInput({...userInput, charOne:e.target.value})}/>

          <input required type="password" name="charTwo" maxLength="1" value={userInput.charTwo} onChange={e=>setUserInput({...userInput, charTwo:e.target.value})}/>

          <input required type="password" name="charThree" maxLength="1"value={userInput.charThree} onChange={e=>setUserInput({...userInput, charThree:e.target.value})}/>

          <input required type="password" name="charFour" maxLength="1" value={userInput.charFour} onChange={e=>setUserInput({...userInput, charFour:e.target.value})}/>
        </div>

        <button disabled={verified} onClick={submit}>Gönder</button>
      </form>

      <Footer />
    </div>
  );
}
