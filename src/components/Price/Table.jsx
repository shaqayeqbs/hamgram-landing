import React, { memo, useState } from "react";
import classes from "./Table.module.css";
import TableContent from "./TableContent";
import { digitsEnToFa } from "@persian-tools/persian-tools";

function CompetitorTable({ price }) {
  const data = [
    { id: "1", title: "salam", period: "" },
    { id: "1", title: "salam" },
  ];
  return (
    <section className={classes.section}>
      {/* <colgroup>
        <col span="2" style="background-color: #D6EEEE" />
      </colgroup> */}
      {/* <table className={classes.table}>
        <colgroup>
          <col style={{ background: "red", zIndex: 100 }} />
          <col style={{ background: "blue", zIndex: 2000 }} />
          <col style={{ background: "blue", zIndex: 2000 }} />

          <col />
        </colgroup>
        <thead>
          <tr>
            <th>{false}</th>
            <th>رایگان (۷ روزه)</th>
            <th>بیزینس</th>
            <th>پرایم</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <TableContent id={item.id} key={index} username={item.title} />
          ))}
        </tbody>
      </table> */}
      <div className="plan-container">
        <div className="plan">
          <table className="table-1">
            <thead>
              <tr>
                <th className="features" style={{ height: "62.5px" }}>
                  {false}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="features">
                  <strong>نمایش دیتای پروفایل </strong>
                </td>
              </tr>
              <tr>
                <td className="features">
                  <strong>نمایش دیتای رقبا</strong>
                </td>
              </tr>
              <tr>
                <td className="features">
                  <strong>امکان افزودن رقیب به پروفایل</strong>
                </td>
              </tr>
              <tr>
                <td className="features">
                  <strong>تحلیل پست</strong>
                </td>
              </tr>
              <tr>
                <td className="features">
                  <strong>محاسبه اینگیجمنت</strong>
                </td>
              </tr>
              <tr>
                <td className="features">
                  <strong>
                    مشاهده تاریخچه دنبال کنندگان و دنبال شوندگان جدید
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="plan">
          <table className="table-2">
            <thead>
              <tr>
                <th className="lead">رایگان (۷ روزه)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="data">
                  <span className="bignumber">۳۰ روز</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">۳۰ روز</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">۳ رقیب</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>

              <tr>
                <td className="features">
                  <strong>
                    Color-coded hashtag &amp; tweet grading browser extensions
                  </strong>
                </td>
              </tr>

              <tr>
                <td className="features"></td>
                <td className="data">
                  <button
                    className="btn btn-primary button"
                    type="submit"
                    value="Get Started"
                    role="button"
                  >
                    <a href="http://dashboard.hamgramco.ir/dashboard/receiving-app?data=peyment">
                      رایگان شروع کنید
                    </a>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="plan">
          <table className="table-3">
            <thead>
              <tr>
                <th className="lead">بیزینس</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="data">
                  <span className="bignumber">۳۰ روز</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">۳۰ روز</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">۳ رقیب</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>

              <tr>
                <td className="features"></td>
                <td className="data">
                  <button
                    className="btn btn-primary button"
                    type="submit"
                    value="Get Started"
                    role="button"
                  >
                    <a href="http://dashboard.hamgramco.ir/dashboard?data=peyment">
                      {digitsEnToFa(price.toLocaleString())}
                      <span className="margin"> تومان</span>
                    </a>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="plan">
          <table className="table-4">
            <thead>
              <tr>
                <th className="lead">پرایم</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="data">
                  <span className="bignumber">۹۰ روز</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">۹۰ روز</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">۷ رقیب </span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>
              <tr>
                <td className="data">
                  <span className="bignumber">✔️</span>
                </td>
              </tr>
              <tr>
                <td className="features">
                  <strong>
                    Color-coded hashtag &amp; tweet grading browser extensions
                  </strong>
                </td>
              </tr>

              <tr>
                <td className="features"></td>
                <td className="data">
                  <button
                    className="btn btn-primary button"
                    type="submit"
                    value="Get Started"
                    role="button"
                  >
                    به زودی
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default memo(CompetitorTable);
