/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 13:58:00
 * @FilePath: \bhpmJS\frontend\src\graphql_custom\_queries.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
export const bidHistorySortByCreatedAt = /* GraphQL */ `
  query BidHistorySortByCreatedAt(
    $auctionLotId: ID!
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
            condition
            provenance
            imgUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          lotAuctionItemId
        }
        createdAt
        updatedAt
        owner
        lotMyFavoritesId
      }
      nextToken
    }
  }
`;

export const listAuctions = /* GraphQL */ `
  query ListAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;

export const lotSortByLotOrder_isAuth = /* GraphQL */ `
  query LotSortByLotOrder(
    $auctionLotId: ID!
    $lotOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLotFilterInput
    $limit: Int
    $nextToken: String
    $username: ID
  ) {
    lotSortByLotOrder(
      auctionLotId: $auctionLotId
      lotOrder: $lotOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lotOrder
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionLotId
        # auction {
        #   id
        #   active
        #   company
        #   description
        #   auctionStartDate
        #   auctionEndDate
        #   bidIncrementPriceList
        #   createdAt
        #   updatedAt
        # }
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
        myFavorites(limit: 1, filter: { owner: { eq: $username } }) {
          items {
            owner
            lotMyFavoritesId
            id
            createdAt
            updatedAt
          }
        }
        lotAuctionItemId
      }
      nextToken
    }
  }
`;

export const lotSortByLotOrder_noAuth = /* GraphQL */ `
  query LotSortByLotOrder(
    $auctionLotId: ID!
    $lotOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lotSortByLotOrder(
      auctionLotId: $auctionLotId
      lotOrder: $lotOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lotOrder
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionLotId
        # auction {
        #   id
        #   active
        #   company
        #   description
        #   auctionStartDate
        #   auctionEndDate
        #   bidIncrementPriceList
        #   createdAt
        #   updatedAt
        # }
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
      nextToken
    }
  }
`;
