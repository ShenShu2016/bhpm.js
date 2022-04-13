/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
      id
      name
      companyName
      address
      fax
      idPassport
      title
      phone
      phone2
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
      id
      name
      companyName
      address
      fax
      idPassport
      title
      phone
      phone2
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
      id
      name
      companyName
      address
      fax
      idPassport
      title
      phone
      phone2
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMyCollection = /* GraphQL */ `
  subscription OnCreateMyCollection($owner: String) {
    onCreateMyCollection(owner: $owner) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMyCollection = /* GraphQL */ `
  subscription OnUpdateMyCollection($owner: String) {
    onUpdateMyCollection(owner: $owner) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMyCollection = /* GraphQL */ `
  subscription OnDeleteMyCollection($owner: String) {
    onDeleteMyCollection(owner: $owner) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAuctionUserLimitation = /* GraphQL */ `
  subscription OnCreateAuctionUserLimitation($owner: String) {
    onCreateAuctionUserLimitation(owner: $owner) {
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
      mySucceedBids {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAuctionUserLimitation = /* GraphQL */ `
  subscription OnUpdateAuctionUserLimitation($owner: String) {
    onUpdateAuctionUserLimitation(owner: $owner) {
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
      mySucceedBids {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAuctionUserLimitation = /* GraphQL */ `
  subscription OnDeleteAuctionUserLimitation($owner: String) {
    onDeleteAuctionUserLimitation(owner: $owner) {
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
      mySucceedBids {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAuctionUserNumber = /* GraphQL */ `
  subscription OnCreateAuctionUserNumber($owner: String) {
    onCreateAuctionUserNumber(owner: $owner) {
      id
      number
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAuctionUserNumber = /* GraphQL */ `
  subscription OnUpdateAuctionUserNumber($owner: String) {
    onUpdateAuctionUserNumber(owner: $owner) {
      id
      number
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAuctionUserNumber = /* GraphQL */ `
  subscription OnDeleteAuctionUserNumber($owner: String) {
    onDeleteAuctionUserNumber(owner: $owner) {
      id
      number
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      categoryName
      auctionItems {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      categoryName
      auctionItems {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      categoryName
      auctionItems {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuctions = /* GraphQL */ `
  subscription OnCreateAuctions {
    onCreateAuctions {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
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
  }
`;
export const onUpdateAuctions = /* GraphQL */ `
  subscription OnUpdateAuctions {
    onUpdateAuctions {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
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
  }
`;
export const onDeleteAuctions = /* GraphQL */ `
  subscription OnDeleteAuctions {
    onDeleteAuctions {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
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
  }
`;
export const onCreateLots = /* GraphQL */ `
  subscription OnCreateLots {
    onCreateLots {
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
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLots = /* GraphQL */ `
  subscription OnUpdateLots {
    onUpdateLots {
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
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLots = /* GraphQL */ `
  subscription OnDeleteLots {
    onDeleteLots {
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
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionUserLimitationID
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuctionItem = /* GraphQL */ `
  subscription OnCreateAuctionItem {
    onCreateAuctionItem {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrl
      imgUrls
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAuctionItem = /* GraphQL */ `
  subscription OnUpdateAuctionItem {
    onUpdateAuctionItem {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrl
      imgUrls
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAuctionItem = /* GraphQL */ `
  subscription OnDeleteAuctionItem {
    onDeleteAuctionItem {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrl
      imgUrls
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBidItemHistory = /* GraphQL */ `
  subscription OnCreateBidItemHistory($owner: String) {
    onCreateBidItemHistory(owner: $owner) {
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
    }
  }
`;
export const onUpdateBidItemHistory = /* GraphQL */ `
  subscription OnUpdateBidItemHistory($owner: String) {
    onUpdateBidItemHistory(owner: $owner) {
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
    }
  }
`;
export const onDeleteBidItemHistory = /* GraphQL */ `
  subscription OnDeleteBidItemHistory($owner: String) {
    onDeleteBidItemHistory(owner: $owner) {
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
    }
  }
`;
