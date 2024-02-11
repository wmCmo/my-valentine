import { useEffect, useState } from "react"
import { ArrowDown } from "@phosphor-icons/react";
import Close from './assets/img/close.jpg'
import Wait from './assets/vid/wait.mp4'
import PlaceTree from './assets/img/place-tree.jpg';
import PlaceChair from './assets/img/place-chair.jpg'
import Flower from './assets/img/flower.png'
import Us from './assets/img/us.png'
import Music from './assets/audio/IFall.mp3'

export default function App() {
  const [rejectCount, setRejectCount] = useState(3)
  const [message, setMessage] = useState('Will you be my valentine?🥺')
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    const song = new Audio(Music);
    if (accept) {
      song.play();
    }

    return () => song.pause()
  }, [accept])

  function handleNo() {

    const newMessage = ['Are you sure?🥺', 'Are YOU sure?🥺', 'I need you.🥺', '🥺🥺🥺', 'Please.🥺'];

    setRejectCount(prevReject => prevReject + 1);
    if (rejectCount > 7) {
      setMessage(newMessage[newMessage.length - 1]);
    } else {
      setMessage(newMessage[rejectCount - 3]);
    }
    setAccept(false);
  }
  function handleYes() {
    setMessage('Awwwwww. Thank you nakub🫶 I love you too🥰🥰')
    setRejectCount(3);
    setAccept(true);
  }

  const scroll = (
    <div className={accept ? 'continue accept' : 'continue'}>
      <p>Yayy! Now it&apos;s time to scroll down</p>
      <ArrowDown weight="regular" size={25} />
      {accept && <>
        <p className="intro">
          มาดูกันดีกว่า ว่าปีที่แล้วมีอะไรบ้างง
        </p>
        <h2>เนื่องจากว่าปีที่แล้ววันวาเลนไทน์เราไม่มีรูปด้วยกันเลย... เค้า Skip ไปวันที่ 22 เลยนะ5555</h2>
        <p>จริง ๆ ก็คือ วันที่เค้าเขียนไดอารี่นั่นแหละนะ</p>
        <div className="close">
          <img src={Close} alt="Image of the shop that is closed" />
          <p>เค้ากะจะไปซื้อ いくら丼 ให้เบ้บซะหน่อย แต่ดันปิดวันนี้เฉยเลยย <br />ก็เลยได้ไปซื้อหนมปังไทระยะเลย555</p>
        </div>
        <div className="wait">
          <p>เสร็จแล้วเค้าก็มารอที่นี่ กว่าจะหาที่ดี ๆ ได้ยากมากเลย เพราะมีแต่สุสานกับที่ก่อสร้าง แต่วันนั้นอากาศดีมากเลยนะ เค้าตื่นเต้นมากเพราะมีดอกไม้ด้วย</p>
          <video width={320} height='auto' controls>
            <source src={Wait} />
          </video>
        </div>
        <div className="places">
          <p>อันนี้ที่เค้านั่งรอ ตอนแรกตรงที่มีแดดมันอากาศดีมากเลยนะ แต่พอมาตรงนี้เริ่มหนาว555</p>
          <div className="collage">
            <img src={PlaceChair} alt="Place where I sit waiting for you" />
            <img src={PlaceTree} alt="Place where I sit waiting for you" />
          </div>
        </div>
        <div className="met">
          <h3>ในที่สุดพวกเราก็ได้เจอกันนนน💓💞</h3>
          <div className="collage">
            <img src={Flower} alt="My flower to you" />
            <img src={Us} alt="A picture of us" />
          </div>
        </div>
        <div className="end">
          <h2>ขอบคุณที่เป็นวาเลนไทน์ของเค้านะคั้บ🥰 เธอเป็นวาเลน์ไทน์ของเค้าทุกปีเลยได้มั้ย</h2>
          <p>ขอโทษที่ปีนี้เค้าไม่ได้อยู่กับเธอนะ แต่เค้าคิดถึงเธอทุกวันเลย เค้าจะรีบกลับไปหาเธอนะคับ</p>
          <p>เค้ารักเธอมาก ๆ นะ หวังว่าเธอจะชอบของขวัญชิ้นนี้นะคั้บ ^^</p>
        </div>
      </>
      }

    </div>
  )


  return (
    <>
      <div className="app">
        <h1>{message}</h1>
        <div className="buttons">
          <button className="btn btn-st" style={{ height: rejectCount + 'em', width: rejectCount + 2 + 'em' }} onClick={handleYes}>YES</button>
          <button onClick={handleNo} className="btn btn-nd">No</button>
        </div>
      </div>
      {scroll}
    </>
  )
}
