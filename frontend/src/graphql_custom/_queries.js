/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 10:38:03
 * @FilePath: \bhpmJS\frontend\src\graphql_custom\_queries.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
export const bidHistorySortByCreatedAt = /* GraphQL */ `
  query BidHistorySortByCreatedAt(
    $auctionsID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBidHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BidHistorySortByCreatedAt(
      auctionsID: $auctionsID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bidPrice
        auctionsID
        bidHistoryStatus
        userNumber
        bidForm
        auctions {
          id
          company
          description
          auctionStartDate
          auctionEndDate
          createdAt
          updatedAt
        }
        lot {
          id
          lot
          auctionItemID
          startingPrice
          auctionItem {
            id
            name
            title
            description
            categoryID
            category {
              id
              categoryName
              createdAt
              updatedAt
            }
            condition
            provenance
            imgUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

export const listMyFavorites = /* GraphQL */ `
  query ListMyFavorites(
    $filter: ModelMyFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lot {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotStatus
          auctionsID
          auctionItemID
          auctionItem {
            id
            name
            title
            description
            categoryID
            category {
              id
              categoryName
              createdAt
              updatedAt
            }
            condition
            provenance
            imgUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

export const listAuction = /* GraphQL */ `
  query ListAuction(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuction(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          items {
            id
            lot
            startingPrice
            estimatedPriceMin
            estimatedPriceMax
            lotStatus
            auctionsID
            auctionItemID
            createdAt
            updatedAt
          }
          nextToken
        }
        bidHistories {
          items {
            id
            bidPrice
            auctionsID
            lotID
            userNumber
            bidHistoryStatus
            bidForm
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        bidIncrementPriceList
        auctionUserLimitations {
          items {
            id
            maxUserBidPrice
            limitStatus
            auctionsID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        auctionUserNumbers {
          items {
            id
            number
            auctionsID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const lotSortByLot_isAuth = /* GraphQL */ `
  query LotSortByLot(
    $auctionsID: ID!
    $lot: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLotFilterInput
    $limit: Int
    $nextToken: String
    $username: ID
  ) {
    lotSortByLot(
      auctionsID: $auctionsID
      lot: $lot
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionsID
        auctions {
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
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          categoryID
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
        }
        bidHistories {
          nextToken
        }
        createdAt
        updatedAt
        myFavorites(limit: 1, filter: { owner: { eq: $username } }) {
          items {
            owner
            lotMyFavoritesId
            id
            createdAt
            updatedAt
          }
        }
      }
      nextToken
    }
  }
`;

export const lotSortByLot_noAuth = /* GraphQL */ `
  query LotSortByLot(
    $auctionsID: ID!
    $lot: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lotSortByLot(
      auctionsID: $auctionsID
      lot: $lot
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionsID
        auctions {
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
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          categoryID
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
        }
        bidHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
