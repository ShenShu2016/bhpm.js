/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 10:50:32
 * @FilePath: \bhpmJS\frontend\src\graphql_custom\_subscriptions.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
export const onCreateBidHistory = /* GraphQL */ `
  subscription OnCreateBidHistory {
    onCreateBidHistory {
      id
      bidPrice
      auctionBidHistoriesId
      lot {
        id
        lotOrder
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionLotId
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
        }
        createdAt
        updatedAt
        lotAuctionItemId
      }
      userNumber
      bidHistoryStatus
      bidForm
      createdAt
      updatedAt
      owner
      lotBidHistoriesId
    }
  }
`;

export const onUpdateBidHistory = /* GraphQL */ `
  subscription OnUpdateBidHistory {
    onUpdateBidHistory {
      id
      bidPrice
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        bidIncrementPriceList
        auctionUserLimitations {
          nextToken
        }
        auctionUserNumbers {
          nextToken
        }
        createdAt
        updatedAt
      }
      lotsID
      lots {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotsStatus
        auctionsID
        auctions {
          id
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          categoryID
          condition
          provenance
          imgUrls
          createdAt
          updatedAt
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userNumber
      bidItemHistoryStatus
      bidForm
      createdAt
      updatedAt
      owner
    }
  }
`;
