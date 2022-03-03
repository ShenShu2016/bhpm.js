export const onCreateBidItemHistory = /* GraphQL */ `
  subscription OnCreateBidItemHistory {
    onCreateBidItemHistory {
      id
      bidPrice
      auctionsID
      lotsID
      lots {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotsStatus
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          categoryID
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
  }
`;
