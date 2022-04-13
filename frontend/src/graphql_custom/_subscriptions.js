export const onCreateBidItemHistory = /* GraphQL */ `
  subscription OnCreateBidItemHistory {
    onCreateBidItemHistory {
      id
      bidPrice
      auctionsID
      bidItemHistoryStatus
      userNumber
      bidForm
      lotsID
      auctionUserLimitationID
      auctionUserLimitation {
        id
        maxUserBidPrice
        limitStatus
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
        mySucceedBids {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      lots {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotsStatus
        auctionUserLimitationID
        auctionUserLimitation {
          id
          maxUserBidPrice
          limitStatus
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
          mySucceedBids {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
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

export const onUpdateBidItemHistory = /* GraphQL */ `
  subscription OnUpdateBidItemHistory {
    onUpdateBidItemHistory {
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
          imgUrl
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
