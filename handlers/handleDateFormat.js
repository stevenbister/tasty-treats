// Format date for message file name
const handleDateFormat = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth();
  const date = d.getDate();
  const hrs = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  return `${year}-${month}-${date}-${hrs}-${min}-${sec}`;

}  

module.exports = handleDateFormat;