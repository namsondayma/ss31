import React, { useState } from 'react'

export default function Function() {
  const [fullName, setFullName] = useState<string>("hoa")
  const [age, setAge] = useState<number>(13);
  const [students, setStudents] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(true);
  //const fullName:string="hoa"
  const handleChange = () => {
    setAge(14);
  }
  return (
    <div>
      Function
      {
        /*
        State: dùng để quản lí dữ liệu trong component
        Đối với function để quản lí dữ liệu dùng UserState
        đây là 1 hook sinh ra giúp Fũction coa thể quản lí dữ liệu
        state có thể thay đổi giá trị được
        /

      }
        {/Hiển thị*/}
      <p>{fullName} năm nay {age} tuổi</p>
      <button onClick={handleChange}>change age</button>


    </div>
  )
}