/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 16:28:58
 * @FilePath: \bhpmJS\frontend\src\graphql_custom\_queries.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

export const bidHistorySortByCreatedAt = /* GraphQL */ `
  query BidHistorySortByCreatedAt(
    $auctionBidHistoriesId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBidHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BidHistorySortByCreatedAt(
      auctionBidHistoriesId: $auctionBidHistoriesId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          bidIncrementPriceList
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
          createdAt
          updatedAt
          lotAuctionItemId
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
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        lotBidHistoriesId
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
        bidIncrementPriceList
        auctionUserLimitations {
          items {
            id
            maxUserBidPrice
            limitStatus
            createdAt
            updatedAt
            owner
            auctionAuctionUserLimitationsId
          }
          nextToken
        }
        auctionUserNumbers {
          items {
            id
            number
            createdAt
            updatedAt
            owner
            auctionAuctionUserNumbersId
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
