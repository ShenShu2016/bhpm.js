/*
 * @Author: Yang Liu
 * @Date: 2022-03-24 23:18:13
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-29 13:49:46
 * @FilePath: \bhpmJS\frontend\src\pages\business_info\Rules.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container, styled } from "@mui/material";

import Navbar from "../../components/navbar/Navbar";
import React from "react";
import { useSelector } from "react-redux";

export default function AboutUs() {
  const { currentLanguage } = useSelector((state) => state.general.language);
  const InnerContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  }));

  return (
    <>
      <Navbar />
      <InnerContainer
        sx={{
          justifyContent: "left",
        }}
      >
        <Box>
          <h1> {currentLanguage === "zh_hk" ? "服務規則" : "Service rules"}</h1>

          {currentLanguage === "zh_hk" ? (
            <>
              <p>
                <h2>總則</h2>
              </p>
              <p>
                第一條
                本公司作為買賣雙方之代理人，應為雙方提供服務和平臺（但對買家或賣家的任何違約行為不承擔任何責任）。
              </p>
              <p>
                第二條
                參加本公司拍賣活動的賣家或買家必須仔細閱讀以下之條款，以維護權益。
              </p>
              <p>
                第三條
                如果對任何參拍物的所有權有異議，必須於拍賣之前提出司法單位書面證明，由本公司接洽及說明，否則一概不予受理。
              </p>
              <p>
                第四條
                瀕危物種的拍賣有嚴格的限製，這包括但並不僅限於骨（鯨骨等等）製品，象牙，龜甲，海豹皮，犀牛角還有其它任何在大多數國家有嚴格限製或禁止的動物部件。
              </p>
              <p>
                <h2>關於買方</h2>
              </p>
              <p>
                第五條
                參加拍賣的買家應在拍賣會舉行前親自向本公司登記，買家應提供真實的相關資料，並授權本公司向銀行索取買家的財務信用資料，並取得競投號碼入場。
              </p>
              <p>
                第六條
                委托本公司協助拍賣的買家，應於拍賣活動開始前24小時與本公司簽訂委托拍賣表，並支付保證金，如有成交，余款應在競投成功後10日內一次付清。
              </p>
              <p>
                第七條
                拍賣進行中舉牌者不得撤回，本公司認定出價最高者獲得購買權。
              </p>
              <p>
                第八條
                本公司具有完全決定權拒絕任何人進入拍賣場地或參與拍賣（與競標者的信用有關），亦可拒絕接受任何競投。
              </p>
              <p>
                第九條
                買家應提早於預展期內，親自到會場仔細審查拍賣品原件，選定參拍項目，並對自己競投拍賣品的行為承擔法律責任。本公司就任何拍賣品及拍賣證明文件之真偽，均不對買家作任何保證。
              </p>
              <p>
                第十條
                許多拍賣品基於其年代或性質，使其未能有完美的狀況，本公司可提供拍賣品的狀況報告，圖錄或狀況報告中未說明拍賣品之狀況並不表示該拍賣品沒有缺陷或瑕疵。
              </p>
              <p>
                第十一條
                本公司對於委托人所委托拍賣的任何物品，依本公司與委托人所簽訂的委托拍賣合同書約定，進行拍照、圖錄出版介紹及展示。
              </p>
              <p>
                第十二條
                本公司在拍賣日前編印之圖錄或以其它形式對任何拍賣品的作者、來歷、年代、尺寸、質地、裝裱、歸屬、真實性、出處、保存情況、估價等方面的介紹，僅供買家參考，本公司不做任何擔保。
              </p>
              <p>
                第十三條
                圖錄內拍賣品之描述僅作為指引，拍賣品之色彩和明暗度在印刷上或屏幕上看起來可能會與實體情況不同，其不作為任何拍賣項目之依據。
              </p>
              <p>
                第十四條
                與拍賣品有關之一切影像、圖示與書面材料之相關知識產權（包括但不限於著作權、專利等），於任何時候均屬於本公司之財產及所有，未經本公司同意，任何人不得使用。
              </p>
              <p>
                第十五條
                凡欲現場參與、書面競投、電話競投及網上競投者，須於拍賣前一天完成登記手續，並繳納擬拍得最高金額的25%保證金方可參與競投（若繳納支票，請於三日前完成辦理）。
              </p>
              <p>
                第十六條
                若競拍成功，保證金抵作購買款；若不成功，保證金將在拍賣結束後七個工作日內，全額無息退還；若違約或過期不交割，保證金將作為違約金，不予退還。
              </p>
              <p>
                第十七條
                寶華拍賣向買家收取落槌價的25%作為服務費，買家應繳納的總費用為落槌價加上服務費以及相應的加拿大稅款。直接運出加拿大的物品可以獲得稅務豁免。安省的HST稅率為13%，運到其他省的物品等稅率以目的省為準。
              </p>
              <p>
                第十八條
                買家成功競得拍賣品，須於10日內付清全額購買款（包括落槌價、傭金以及相應的稅款）之後取回拍賣品。本公司有權要求買家於拍賣後當日支付拍賣品成交價30%為定金，並於10日內一次付清余款，完成交付手續並取貨。
              </p>
              <p>
                第十九條
                買家付款可以現金（最高限額1萬加幣）、匯款、支票、借記卡（僅限加拿大買家）或信用卡(最高限額25,000加幣）支付，如以支票付款，待支票兌現後，方可領取拍賣品。
              </p>
              <p>
                第二十條
                本公司所有交易均以加幣計價，任何加幣以外的幣種支付所發生的匯率交換費用以及手續費均由買家自己承擔。
              </p>
              <p>
                第二十一條
                本公司的拍賣價並不包括包裝，如有向買家提供包裝材料僅為一種免費服務，因此包裝時對物品造成任何損壞概由買家自行負責。
              </p>
              <p>
                第二十二條
                買家付清款項後，必須自行取貨，若委托他人，需出示委托證明書；若委托本公司送貨或需額外保險，均另行計價，對於運送過程中所造成的一切損失，本公司概不負責。
              </p>
              <p>
                第二十三條
                買家付清全額款項後即對已購拍賣品負有全責，即便該拍賣品仍由公司保存，在保存過程中有任何毀損均由買家承擔。
              </p>
              <p>
                第二十四條
                買家成功競投拍賣品後，未於拍賣後期限內付清款項的，視為違約，保證金不予退還，並承擔相關責任。經本公司協商買賣雙方同意的，不在此限。
              </p>
              <p>
                第二十五條
                買家在拍賣成交日（含成交日）起10日仍未付款，本公司將每月在總付款金額上加收2%做為滯納金，或者本公司有權取消此交易，買家付清全部款項之前對該物品沒有擁有權。
              </p>
              <p>
                第二十六條
                經賣家同意，本公司可再行拍賣或以其它方式出售該拍賣品，如重售價格低於原拍賣價時，可向原買家索償差額。
              </p>
              <p>
                第二十七條
                在將來的任何拍賣中，本公司可拒絕買家再次競投或由他人代為競投，或在接受其任何競投之前，本公司有權向買家先收取高額保證金。
              </p>
              <p>
                第二十八條
                本公司對於買家成功競投的拍賣品，已付清並久不領取不負保管的責任，拍賣後30日起，須支付儲存費用每件每周15加幣。
              </p>
              <p>
                <h2>關於賣方</h2>
              </p>
              <p>
                第二十九條
                本公司在公開拍賣會中，是賣家代理人身份，賣家的規定已詳細列於賣家委托合同書中。
              </p>
              <p>第三十條 本公司有權平息及處理拍賣中任何爭議。</p>
              <p>
                第三十一條
                本公司有義務為交易雙方保守秘密，以維護買賣雙方及本公司的利益不受損害。
              </p>
              <p>第三十二條 為維護場內秩序，請勿吸煙，十歲以下兒童請勿入場。</p>
              <p>
                <h2>競拍規則</h2>
              </p>
              <p>得知最新拍賣訊息</p>
              <p>
                最新的拍賣、活動、新聞資訊皆會公布於www.bhpm.ca上，建議您將本網站加入「我的最愛」隨時回到本網站獲得最新資訊。
              </p>
              <p>
                <h2>保證金</h2>
              </p>
              <p>
                為確保拍賣的圓滿順利以及拍賣者的權益，請所有參與現場拍賣、電話委托、書面委托以及網上拍賣者於拍賣前一天完成登記，並繳納預計買入價值20%的定金（CAD$2000以下可以免交定金，但是仍需完成註冊），定金可以是電匯，銀行卡，信用卡，AlphaPay，遠程信用卡請點擊鏈接下載信用卡授權書。
              </p>
              <p>
                <h2>付款方式</h2>
              </p>
              <p>
                成功競得拍賣品的買家應自拍定日起10日內付清全額款項（包含落槌價、拍賣傭金以及相應稅款。付款可以現金、匯款、支票借記卡或信用卡（最高限額25,000加幣）支付，如以支票支付，須待支票兌現後，方可領取拍賣品。所有價格均以加幣結算，如果以其他幣種支付，買家應自行兌換為加幣。
              </p>
              <p>
                <h2>領取拍賣品</h2>
              </p>
              <p>
                買家在付清款項後，必須自行安排取貨或運輸。若委托他人，必須出示委托證明書，對於運輸過程中所造成的一切損失，本公司概不承擔責任。
              </p>
              <p>
                <h2>拍賣品儲存</h2>
              </p>
              <p>拍賣後30日起，買家若未領取拍賣品，須支付儲存費用。</p>
              <p>
                <h2>拍賣品狀況</h2>
              </p>
              <p>
                請於拍賣預展時查看拍賣品，如有需要，寶華拍賣將提供拍賣品狀況報告。圖錄或狀況報告中未說明並不表示該拍賣品沒有缺陷或瑕疵，詳細參閱服務規則。
              </p>
              <br />
              <br />
            </>
          ) : (
            <>
              The Company shall provide service and platform for both buyers and
              sellers (but shall not assume any responsibility for any breach of
              contract by the buyer or seller).
              <br />
              <br />
              Buyers or sellers participating in our auction activities must
              read the following terms carefully to protect their rights and
              interests.
              <br />
              <br />
              If there is any objection to the ownership of any item involved in
              the auction, it must be submitted by legal written proof before
              the auction, and the company will contact and explain, otherwise
              it will not be accepted.
              <br />
              <br />
              The sale of endangered species is subject to strict restrictions,
              including but not limited to bone (whale bones and so on), ivory,
              tortoiseshell, seal skin, rhino horn and any other animal parts
              that are strictly restricted or banned in most countries.
              <br />
              <br />
              About buyer
              <br />
              <br />
              The buyer who participates in the auction shall register with our
              company before the auction. The buyer shall provide true relevant
              information and authorize our company to obtain the financial and
              credit information of the buyer from the bank and obtain the
              bidding number to enter the auction.
              <br />
              <br />
              During the auction, the bidder shall not withdraw, and our company
              shall determine that the highest bidder has the right to purchase.
              <br />
              <br />
              Our company has the sole right to refuse any person to enter the
              auction site or participate in the auction (which is related to
              the credit of the bidder), and may refuse to accept any bidding.
              <br />
              <br />
              The buyer shall go to the venue to carefully examine the original
              auction items, select the items to participate in the auction, and
              bear legal responsibility for their bidding. Our company does not
              guarantee the authenticity of any auction items or auction
              documents.
              <br />
              <br />
              Many auction items are not in perfect condition due to their age
              or nature. Our company may provide a condition report of the
              auction items. Failure to state the condition of the auction items
              in the catalogue or condition report does not mean that the
              auction items are free from defects.
              <br />
              <br />
              Our company shall, in accordance with the provisions of the
              consignment contract signed by the company and the consignor, take
              photos, publish catalogues, introduce and display any articles
              entrusted by the consignor.
              <br />
              <br />
              The introduction of the author, origin, age, size, texture,
              mounting, attribution, authenticity, source, preservation,
              valuation and other aspects of any auction item compiled and
              printed by our company before the auction is only for the
              reference of the buyer, and our company does not make any
              guarantee.
              <br />
              <br />
              The description of the auction items in the catalogue is for
              guidance only. The colours and shades of the auction items may
              appear different in print or on the screen from the physical
              condition and shall not be used as the basis of any auction items.
              <br />
              <br />
              Intellectual property rights (including but not limited to
              copyright, patent, etc.) of all images, illustrations and written
              materials related to the auction items shall be the property and
              ownership of our company at all times and shall not be used by
              anyone without the consent of our company.
              <br />
              <br />
              Anyone who wants to participate in the auction on-site, absent
              bidding, telephone bidding and online bidding shall complete the
              registration form one day before the auction and pay 20% of the
              maximum expecting bidding amount to participate in the auction (if
              you pay the check, please complete the procedures three days
              before).
              <br />
              <br />
              If the auction is successful, the deposit shall be used as the
              purchase fund. If unsuccessful, the deposit will be refunded in
              full without interest within seven business days after the auction
              closes; In case of default or overdue, the deposit will be deemed
              as liquidated damages and will not be refunded.
              <br />
              <br />
              Our company shall charge 25% of the hammer price to the buyer as
              the service fee(commission). The total fee to be paid by the buyer
              shall be the hammer price plus the service fee and the applicable
              Canadian taxes. Items shipped directly out of Canada are exempt
              from tax. The HST(Harmonized Sales Tax) rate of Ontario is 13%.
              The tax rate of goods shipped to other provinces shall be subject
              to the destination province.
              <br />
              <br />
              The buyer who successfully wins bidding items shall take it back
              after paying the full purchase price (including the hammer price,
              commission and corresponding taxes) within 10 days. Our company
              has the right to require the buyer to pay 30% of the transaction
              price as deposit on the day after the auction, and pay off the
              balance in a lump sum within 10 days to complete the delivery
              procedures and pick up the goods.
              <br />
              <br />
              The buyer may pay by cash, wire transfer, check, debit card
              (Canadian buyer only) or credit card (maximum 25,000 Canadian
              dollars). If the buyer pays by check, the auction item can be
              collected only after the check is cashed.
              <br />
              <br />
              All transactions of our Company shall be denominated in Canadian
              dollars, and any exchange fees and handling charges incurred for
              payment in a currency other than Canadian dollars shall be on the
              buyers’ expense.
              <br />
              <br />
              The bidding price of our company does not include packaging.
              Providing packaging materials to the buyer is only a free service,
              so the buyer shall be responsible for any damage caused to the
              goods during packaging.
              <br />
              <br />
              The buyer must take delivery of the goods by himself after the
              payment has been paid. If delivery or additional insurance is
              required, it will be charged separately and we will not be
              responsible for any loss or damage caused in the course of
              delivery.
              <br />
              <br />
              The buyer shall be fully responsible for the purchased auction
              items upon full payment. Even if the auction items are still kept
              by our company, the buyer shall be liable for any damage in the
              process of preservation.
              <br />
              <br />
              If a buyer fails to pay off the amount within the time limit after
              successfully bidding for an auction item, the buyer shall be
              deemed to be in breach of contract, and the deposit shall not be
              refunded and the buyer shall bear relevant responsibilities. This
              restriction is not applicable to those agreed by the buyer and the
              seller through negotiation by our company.
              <br />
              <br />
              If the buyer fails to pay within 10 days from the closing date of
              the auction (including the closing date), our company will charge
              2% of the total amount of payment per month as a late fee, or our
              company has the right to cancel the transaction and the buyer has
              no ownership of the goods until the full payment is made.
              <br />
              <br />
              With the consent of the seller, the company may auction the item
              again or sell it in other ways. If the resale price is lower than
              the original auction price, our company may claim the difference
              from the original buyer.
              <br />
              <br />
              In any future auction, our company may refuse to allow the buyer
              to bid again or to have another person bid on his behalf, or our
              company may charge the buyer a substantial deposit before
              accepting any bid.
              <br />
              <br />
              The buyer shall pay the storage fee of CA$15 per item per week
              from 30 days after the auction if the buyer has paid off the
              auction item successfully and does not collect it for a long time.
              <br />
              <br />
              About the seller
              <br />
              <br />
              Our company acts as the seller's agent in the public auction, and
              the seller's regulations have been listed in detail in the
              consignment contract.
              <br />
              <br />
              The company has the right to settle any disputes during the
              auction.
              <br />
              <br />
              The Company shall be obliged to keep secret for both parties to
              protect the interests of both parties and the Company.
              <br />
              <br />
              In order to maintain the order of the venue, no smoking is
              allowed. Children under the age of 10 are not allowed to enter the
              venue.
            </>
          )}
        </Box>
      </InnerContainer>
    </>
  );
}
