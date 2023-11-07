import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
