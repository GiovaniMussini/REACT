import './Thanks.css'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"


const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>A sua opinião é muito importante, em breve você receberá um cupom de desconto</p>
        <p>Para concluior sua avaliação clique no botão de enviar abaixo</p>
        <h3>Aqui está o resumo da sua avaliação: </h3>
        <p className="review-data">
          <span>Satisfação com o produto: {data.name}</span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentário: </span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks