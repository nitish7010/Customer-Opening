import React, { useEffect, useState } from 'react'
import instance from '../Helpers/Axios'
import style from './style.module.css'
import {useNavigate} from 'react-router-dom'

function CustomerList() {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getListData = async () => {
        try {
            const data = await instance({
                method:"GET",
                url:"/api/approval/list"
            })
            if(data.data){
                setData(data.data?.data)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
         getListData()
    },[1])

    const handleForm = (requestId, requestDate) => {
        const setDate = (date) => {
            const ms = date
              .replace("/", "")
              .replace("/", "")
              .replace("Date", "")
              .replace("(", "")
              .replace(")", "");
            const d = new Date(+ms);
            const finalDate = d
              .toISOString()
              .split("T")[0]
              .split("-")
              .reverse()
              .join(".");
            return finalDate;
          };
    
          let date = setDate(requestDate)
        navigate(`/form/${requestId}/${(new Date(date.replaceAll('.','-'))).getFullYear()}`)
    }

  return (
    <div className={style.container}>
        <div className={style.header}>
            <img className={style.accountImage} src="https://img1.pnghut.com/3/8/14/BdbkMiE9YZ/credit-card-merchant-user-logo-symbol.jpg" alt='account image' /><h1>Customer Account Opening List</h1>
        </div>
        <div className={style.accountList}>
            <table>
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Request No.</th>
                        <th>Created On</th>
                        <th>Created By</th>
                        <th>AM Level Approved By</th>
                        <th>AM Level Approved Date</th>
                        <th>SM Level Approved By</th>
                        <th>SM Level Approved Date</th>
                        <th>ZM Level Approved By</th>
                        <th>ZM Level Approved Date</th>
                        <th>ROM Level Approved By</th>
                        <th>ROM Level Approved Date</th>
                        <th>HOSA Level Approved By</th>
                        <th>HOSA Level Approved Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ?
                        data.map((x,i) => {
                            return <tr>
                                    <td className={style.sno} key={Math.random()}>{x.Sno}</td>
                                    <td className={style.formcol} onClick={() => handleForm(x.RequestId,x.Erdat)} key={Math.random()}>{x.RequestId}</td>
                                    <td key={Math.random()}>{x.Erdat}</td>
                                    <td key={Math.random()}>{x.Ernam}</td>
                                    <td key={Math.random()}>{x.Am}</td>
                                    <td key={Math.random()}>{x.AmErdat}</td>
                                    <td key={Math.random()}>{x.Sm}</td>
                                    <td key={Math.random()}>{x.SmErdat}</td>
                                    <td key={Math.random()}>{x.Zm}</td>
                                    <td key={Math.random()}>{x.ZmErdat}</td>
                                    <td key={Math.random()}>{x.Rom}</td>
                                    <td key={Math.random()}>{x.RomErdat}</td>
                                    <td key={Math.random()}>{x.Hosa}</td>
                                    <td key={Math.random()}>{x.HosaErdat}</td>
                                    {/* {console.log} */}
                            </tr>
                        })
                        :
                        <td style={{textAlign:"center",border:"0"}} colSpan={12}>"Loading ..."</td>
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CustomerList