import React from "react";
import style from "./modal.module.css";

function Modal({setopen}) {
  return (
    <div className={style.modal}>
      <div className={style.modalMain}>
        <div className={style.historyHeader}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/arrow-3182030-2659503.png"
            alt="image"
          />
          Customer Account Opening
        </div>
        <div className={style.table}>
          <div className={style.tableHeader}>History</div>
          <div className={style.tableContainer}>
          <table>
            <thead>
            <tr>
              <th>Item</th>
              <th>Changed By</th>
              <th>Changed On</th>
              <th>Change...</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>MMFBD</td>
              <td>20.10.2022</td>
              <td>11:36:10</td>
              <td>CO</td>
              <td>Created</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MMFBD</td>
              <td>20.10.2022</td>
              <td>11:36:10</td>
              <td>CO</td>
              <td>Created</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MMFBD</td>
              <td>20.10.2022</td>
              <td>11:36:10</td>
              <td>CO</td>
              <td>Created</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MMFBD</td>
              <td>20.10.2022</td>
              <td>11:36:10</td>
              <td>CO</td>
              <td>Created</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MMFBD</td>
              <td>20.10.2022</td>
              <td>11:36:10</td>
              <td>CO</td>
              <td>Created</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MMFBD</td>
              <td>20.10.2022</td>
              <td>11:36:10</td>
              <td>CO</td>
              <td>Created</td>
            </tr>
            </tbody>
          </table>
          </div>
          <div className={style.btns}>
            <button className={style.fileIcon}>
              <img
                src="https://www.clipartmax.com/png/small/140-1401237_file-download-icon-download-csv-file-icon.png"
                alt="image"
              />
            </button>

            <button className={style.fileIcon}>
              <img
                src="https://www.clipartmax.com/png/small/140-1401237_file-download-icon-download-csv-file-icon.png"
                alt="image"
              />
            </button>

            <button className={style.fileIcon}>
              <img
                src="https://www.clipartmax.com/png/small/140-1401237_file-download-icon-download-csv-file-icon.png"
                alt="image"
              />
            </button>

            <button className={style.fileIcon}>
              <img
                src="https://www.clipartmax.com/png/small/140-1401237_file-download-icon-download-csv-file-icon.png"
                alt="image"
              />
            </button>
          </div>
        </div>
        <button onClick={() => setopen(false)} className={style.back}>BACK</button>
      </div>
    </div>
  );
}

export default Modal;
