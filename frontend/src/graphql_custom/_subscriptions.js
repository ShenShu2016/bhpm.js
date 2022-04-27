/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 14:31:09
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
      auctionBidHistoriesId
      auction {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          nextToken
        }
        bidHistories {
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
      lot {
        id
        lotOrder
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionLotId
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
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
        bidHistories {
          nextToken
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
