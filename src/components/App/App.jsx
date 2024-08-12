import { useState, useEffect } from "react";
import css from './App.module.css'
import Profile from "../Profile/Profile"
import userData from "../UzerBacand/proFile.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../UzerBacand/transactions.json"
// import Options from "../Options/Options"

export default function App() {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const apdaiteValue = () => { setValue({ ...value }) }
  return (
    <div className={css.container}>
      <button onClick={apdaiteValue}>Clic me</button>
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />

        <TransactionHistory items={transactions} />
      </>
    </div>
  )
}


