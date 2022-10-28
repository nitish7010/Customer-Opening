import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import style from "./Form.module.css";
// import HistoryEduSharpIcon from '@mui/icons-material/HistoryEduSharp';
// import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
// import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../Helpers/helpers";
function Form() {
  const [form, setForm] = useState({
    accountGroup: "1",
    companyCode: "2",
    salesOffice: "3",
    salesOrganization: "4",
    distributionChannel: "5",
    division: "6",
    withSAS: "7",
    title:"8",
    name1:"9",
    street2:"10",
    houseNo:"11",
    street4:"12",
    district:"13",
    postalCode:"14",
    co:"15",
    street3:"16",
    country:"17",
    region:"18",
    street5:"19",
    differentCity:"20",
    telephone:"21",
    telebox:"22",
    mobilePhone:"23",
    fax:"24",
    email:"25",
    taxNumber:"26",
    latitude:"27",
    longitude:"28",
    customerClass:"29",
    town:"30",
    regionalMarket:"31",
    hierarchyAssignment:"32",
    priceGroup:"33",
    customerGroup:"34",
    priceList:"35",
    custPriceProc:"36",
    shopingConditions:"37",
    custStateGro:"38",
    deliveringPlant:"39",
    rebate:"40",
    incoterms1:"41",
    termsOfPayment:"42",
    status:"43",
    pan:"44",
    reconAccount:"45",
    termsOfPayment2:"46",
  });
  const [open, setopen] = useState(false);
  const navigate = useNavigate();
  const handleHistory = () => {
    setopen(true);
  };

  useEffect(() => {
    console.log("dfsfa");
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, [1]);

  const {
    accountGroup,
    companyCode,
    salesOffice,
    salesOrganization,
    distributionChannel,
    division,
    withSAS,
    title,
    name1,
    street2,
    houseNo,
    street4,
    district,
    postalCode,
    co,
    street3,
    country,
    region,
    street5,
    differentCity,
    telephone,
    telebox,
    mobilePhone,
    fax,
    email,
    taxNumber,
    latitude,
    longitude,
    customerClass,
    town,
    regionalMarket,
    hierarchyAssignment,
    priceGroup,
    customerGroup,
    priceList,
    custPriceProc,
    shopingConditions,
    custStateGro,
    deliveringPlant,
    rebate,
    incoterms1,
    termsOfPayment,
    status,
    pan,
    reconAccount,
    termsOfPayment2,
  } = form;

  return (
    <div className={style.mainContainer}>
      <div className={style.colClass}>
        <div className={style.header}>
          <h1>Customer Account Opening</h1>
        </div>
        <div className={style.navBar}>
          <ul>
            <li className={style.history} onClick={handleHistory}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/programming-script-503834.png"
                alt="history image"
              />
              View History
            </li>
            <li className={style.history}>
              <img
                src="https://www.pinpng.com/pngs/m/36-361656_green-light-tick-mark-png-transparent-png.png"
                alt="approve"
              />
              Approve
            </li>
            <li className={style.history}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS332PnDkUJ2Fu9wDOIGVuk5npuRbWYiTtxlr_sFvGnBu72XucJsPaH8nvOjZKlXcpKHp8&usqp=CAU"
                alt="reject"
              />{" "}
              Reject
            </li>
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
                  <input value={accountGroup} />
                </div>
                <div className={style.inputLabel}>
                  <label>Company Code</label>
                  <input value={companyCode} />
                </div>
                <div className={style.inputLabel}>
                  <label>Sales Office</label>
                  <input value={salesOffice} />
                </div>
              </div>

              <div className={style.headerBody}>
                <div className={style.inputLabel}>
                  <label>Sales Organization</label>
                  <input value={salesOrganization} />
                </div>
                <div className={style.inputLabel}>
                  <label>Distribution Channel</label>
                  <input value={distributionChannel} />
                </div>
                {/* <div className={style.inputLabel}>
                <label>Account Group</label>
                <input />
              </div> */}
              </div>

              <div className={style.headerBody}>
                <div className={style.inputLabel}>
                  <label>Division</label>
                  <input value={division} />
                </div>
                <div className={style.inputLabel}>
                  <label>With SAS</label>
                  <input value={withSAS}/>
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
              <button disabled>Upload Documents</button>
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
                <input value={title} />
              </div>
              <div className={style.inputLabel}>
                <label>Name 1</label>
                <input value={name1} />
              </div>
              <div className={style.inputLabel}>
                <label>Street 2</label>
                <input value={street2} />
              </div>
              <div className={style.inputLabel}>
                <label>Street/House No.</label>
                <input value={houseNo} />
              </div>

              <div className={style.inputLabel}>
                <label>Street 4</label>
                <input value={street4}/>
              </div>

              <div className={style.inputLabel}>
                <label>District</label>
                <input value={district} />
              </div>

              <div className={style.inputLabel}>
                <label>Postal Code/City</label>
                <input value={postalCode} />
              </div>
            </div>

            <div className={style.addressBody}>
              <div className={style.inputLabel}>
                <label>C/O</label>
                <input value={co} />
              </div>
              <div className={style.inputLabel}>
                <label>Street 3</label>
                <input value={street3} />
              </div>
              <div className={style.inputLabel}>
                <label>Country</label>
                <input value={country} className={style.addInput} />
                <label>Region</label>
                <input value={region} className={style.addInput} />
              </div>
              <div className={style.inputLabel}>
                <label>Street 5</label>
                <input value={street5} />
              </div>
              <div className={style.inputLabel}>
                <label>Different City</label>
                <input value={differentCity} />
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
              <input value={telephone} />
            </div>
            <div>
              <label>Telebox</label>
              <input value={telebox} />
            </div>
          </div>
          <div className={style.commInput}>
            <div>
              <label>Mobile Phone</label>
              <input value={mobilePhone} />
            </div>
            <div>
              <label>Fax</label>
              <input value={fax} />
            </div>
          </div>
          <div className={style.email}>
            <div></div>
            <label>E-mail</label>
            <input value={email} />
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
              <input value={taxNumber} />
            </div>
            <div>
              <label>Latitude</label>
              <input value={latitude} />
            </div>
            <div>
              <label>Longitude</label>
              <input value={longitude} />
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
              <input value={customerClass} />
            </div>
            <div>
              <label>Town</label>
              <input value={town} />
            </div>
            <div>
              <label>Regional Market</label>
              <input value={regionalMarket} />
            </div>
            <div>
              <label>Hierarchy assignment</label>
              <input value={hierarchyAssignment} />
            </div>
            <div>
              <label>Price Group</label>
              <input value={priceGroup} />
            </div>
            <div>
              <label>Customer group</label>
              <input value={customerGroup} />
            </div>
            <div>
              <label>Price List</label>
              <input value={priceList} />
            </div>
            <div>
              <label>Cust.price.proc</label>
              <input value={custPriceProc} />
            </div>
            <div>
              <label>Shoping Conditions</label>
              <input value={shopingConditions} />
            </div>
            <div>
              <label>Cust.Stats.Gro</label>
              <input value={custStateGro} />
            </div>
            <div></div>
            <div>
              <label>Delivering Plant</label>
              <input value={deliveringPlant} />
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
              <input value={rebate} />
            </div>
            <div>
              <label>Incoterms1</label>
              <input value={incoterms1}/>
            </div>
            <div>
              <label>Terms of payment</label>
              <input value={termsOfPayment} />
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
            <input value={status} />
          </div>
          <hr />
        </div>

        <div className={style.pancard}>
          <div className={style.pancardHeader}>
            <p>PAN CARD Details</p>
          </div>
          <div className={style.panInput}>
            <label>PAN</label>
            <input value={pan} />
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
              <input value={reconAccount} />
            </div>
            <div>
              <label>Terms of payment</label>
              <input value={termsOfPayment2} />
            </div>
          </div>
          <hr></hr>
          <div className={style.withHolding}>
            <div className={style.witHoldingHeader}>Withholding Tax</div>
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
      {open ? <Modal setopen={setopen} /> : null}
    </div>
  );
}

export default Form;
