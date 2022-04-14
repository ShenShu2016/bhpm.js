export const bidItemHistorySortByCreatedAt = /* GraphQL */ `
  query BidItemHistorySortByCreatedAt(
    $auctionsID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBidItemHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BidItemHistorySortByCreatedAt(
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
        bidItemHistoryStatus
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
        lotsID
        lots {
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
            imgUrl
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

export const listMyCollections = /* GraphQL */ `
  query ListMyCollections(
    $filter: ModelMyCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lotsID
        lots {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
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
            imgUrl
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
