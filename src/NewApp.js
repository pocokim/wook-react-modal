import React, {useState, useMemo, useCallback, useRef} from 'react'

const getAverage = numbers => {
  console.log('평균값 계산준')
  if(numbers.length === 0) return 0
  const sum = numbers.reduce((a,b)=> a+ b)
  return sum/ numbers.length
}

const Average = () => {
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')
  const inputEl = useRef(null)
  console.log(inputEl,"inputEl")

  const onChange = useCallback((e) => {
    setNumber(e.target.value)
  }, [])

  // 새로운 number를 받아 새로운 list 
  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number))
    // concat으로 이전 list에 연결
    setList(nextList)
    setNumber('')
  }, []) // number, list 

  const avg = useMemo(()=> getAverage(list), [list])

  return(
    <>
    <input value={number} onChange={onChange} ref={inputEl}></input>
    <button onClick={onInsert}>등록</button>
    <ul>
      {list.map((value,idx)=>(
        <li key={idx}>{value}</li>
      ))}
    </ul>
    <div>
      <b>평균 값:</b>{getAverage(list)}
    </div>
    </>
  )
}

export default Average;

