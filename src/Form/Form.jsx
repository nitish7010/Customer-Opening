import React from "react";
import style from "./Form.module.css";
// import HistoryEduSharpIcon from '@mui/icons-material/HistoryEduSharp';
// import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
// import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';

function Form() {
  return (
    <div className={style.mainContainer}>
      <div className={style.colClass}>
        <div className={style.header}>
          <h1>Customer Account Opening</h1>
        </div>
        <div className={style.navBar}>
          <ul>
            <li>View History</li>
            <li>Approve</li>
            <li>  Reject</li>
          </ul>
        </div>
        <div className={style.firstRow}>
          <div className={style.headerDetail}>
            <div className={style.headerDetailHeader}>
              <p>Header Details</p>
            </div>
            <div className={style.inputDiv}>
              <div className={style.headerBody}>
                <div className={style.inputLabel}>
                  <label>Account Group</label>
                  <input />
                </div>
                <div className={style.inputLabel}>
                  <label>Company Code</label>
                  <input />
                </div>
                <div className={style.inputLabel}>
                  <label>Sales Office</label>
                  <input />
                </div>
              </div>

              <div className={style.headerBody}>
                <div className={style.inputLabel}>
                  <label>Sales Organization</label>
                  <input />
                </div>
                <div className={style.inputLabel}>
                  <label>Distribution Channel</label>
                  <input />
                </div>
                {/* <div className={style.inputLabel}>
                <label>Account Group</label>
                <input />
              </div> */}
              </div>

              <div className={style.headerBody}>
                <div className={style.inputLabel}>
                  <label>Division</label>
                  <input />
                </div>
                <div className={style.inputLabel}>
                  <label>With SAS</label>
                  <input />
                </div>
                {/* <div>
                <label>Account Group</label>
                <input />
              </div> */}
              </div>
            </div>
          </div>

          <div className={style.attechment}>
            <div className={style.attechmentHeader}>
              <p>Attechments</p>
            </div>
            <div className={style.btnAttechment}>
            <button>Upload Documents</button>
            <button>View Attechments</button>
            </div>
          </div>
        </div>

        <div className={style.addressDiv}>
          <div className={style.addressDivHeader}>
            <p>Address Details</p>
          </div>
          <div className={style.addressinputDiv}>
            <div className={style.addressBody}>
              <div className={style.inputLabel}>
                <label>Title</label>
                <input />
              </div>
              <div className={style.inputLabel}>
                <label>Name 1</label>
                <input />
              </div>
              <div className={style.inputLabel}>
                <label>Street 2</label>
                <input />
              </div>
              <div className={style.inputLabel}>
                <label>Street/House No.</label>
                <input />
              </div>

              <div className={style.inputLabel}>
                <label>Street 4</label>
                <input />
              </div>

              <div className={style.inputLabel}>
                <label>District</label>
                <input />
              </div>

              <div className={style.inputLabel}>
                <label>Postal Code/City</label>
                <input />
              </div>
            </div>

            <div className={style.addressBody}>
              <div className={style.inputLabel}>
                <label>C/O</label>
                <input />
              </div>
              <div className={style.inputLabel}>
                <label>Street 3</label>
                <input />
              </div>
              <div className={style.inputLabel}>
                <label>Country</label>
                <input className={style.addInput} />
                <label>Region</label>
                <input className={style.addInput} />
              </div>
              <div className={style.inputLabel}>
                <label>Street 5</label>
                <input />
              </div>
              <div className={style.inputLabel}>
                <label>Different City</label>
                <input />
              </div>
            </div>
          </div>
          {/* <hr /> */}
        </div>

        <div className={style.communication}>
          <div className={style.communicationHeader}>
            <p>Communication Details</p>
          </div>
          <div className={style.commInput}>
            <div>
              <label>Telephone</label>
              <input />
            </div>
            <div>
              <label>Telebox</label>
              <input />
            </div>
          </div>
          <div className={style.commInput}>
            <div>
              <label>Mobile Phone</label>
              <input />
            </div>
            <div>
              <label>Fax</label>
              <input />
            </div>
          </div>
          <div className={style.email}>
            <div></div>
            <label>E-mail</label>
            <input />
          </div>
          {/* <hr /> */}
        </div>

        <div className={style.controlData}>
          <div className={style.controlDataHeader}>
            <p>Control Data</p>
          </div>
          <div className={style.controlInput}>
            <div>
              <label>Tax Number 3</label>
              <input />
            </div>
            <div>
              <label>Latitude</label>
              <input />
            </div>
            <div>
              <label>Longitude</label>
              <input />
            </div>
          </div>
          {/* <hr /> */}
        </div>

        <div className={style.marketing}>
          <div className={style.marketingHeader}>
            <p>Marketing</p>
          </div>
          <div className={style.marketInput}>
            <div>
              <label>Customer Class</label>
              <input />
            </div>
            <div>
              <label>Town</label>
              <input />
            </div>
            <div>
              <label>Regional Market</label>
              <input />
            </div>
            <div>
              <label>Hierarchy assignment</label>
              <input />
            </div>
            <div>
              <label>Price Group</label>
              <input />
            </div>
            <div>
              <label>Customer group</label>
              <input />
            </div>
            <div>
              <label>Price List</label>
              <input />
            </div>
            <div>
              <label>Cust.price.proc</label>
              <input />
            </div>
            <div>
              <label>Shoping Conditions</label>
              <input />
            </div>
            <div>
              <label>Cust.Stats.Gro</label>
              <input />
            </div>
            <div></div>
            <div>
              <label>Delivering Plant</label>
              <input />
            </div>
          </div>
        </div>

        <div className={style.billing}>
          <div className={style.billingHeader}>
            <p>Billing Documents</p>
          </div>
          <div className={style.billingInput}>
            <div>
              <label>Rebate</label>
              <input />
            </div>
            <div>
              <label>Incoterms1</label>
              <input />
            </div>
            <div>
              <label>Terms of payment</label>
              <input />
            </div>
          </div>
          <hr />
        </div>

        <div className={style.credit}>
          <div className={style.creditHeader}>
            <p>Credit Control Area</p>
          </div>
          <div className={style.creditInput}>
            <label>Status</label>
            <input />
          </div>
          <hr />
        </div>

        <div className={style.pancard}>
          <div className={style.pancardHeader}>
            <p>PAN CARD Details</p>
          </div>
          <div className={style.panInput}>
            <label>PAN</label>
            <input />
          </div>
          <hr />
        </div>

        <div className={style.company}>
          <div className={style.companyHeader}>
            <p>Company Code Data</p>
          </div>
          <div className={style.companyInput}>
            <div>
              <label>Recon. account</label>
              <input />
            </div>
            <div>
              <label>Terms of payment</label>
              <input />
            </div>
          </div>
          <hr></hr>
          <div className={style.withHolding}>
              <div className={style.witHoldingHeader}>
                    Withholding Tax
              </div>
              <div className={style.table}>
                <table>
                    <tr>
                        <th>W.</th>
                        <th>W.</th>
                        <th>WT AGTDF</th>
                        <th>AGTTD</th>
                        <th>WT WTSTCD</th>
                    </tr>
                    <tr>
                        <td>A3</td>
                        <td></td>
                        <td>01.01.1900</td>
                        <td>31.12.9999</td>
                        <td>OT</td>
                    </tr>
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
