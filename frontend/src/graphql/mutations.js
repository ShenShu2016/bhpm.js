/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createAuctions = /* GraphQL */ `
  mutation CreateAuctions(
    $input: CreateAuctionsInput!
    $condition: ModelAuctionsConditionInput
  ) {
    createAuctions(input: $input, condition: $condition) {
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
export const updateAuctions = /* GraphQL */ `
  mutation UpdateAuctions(
    $input: UpdateAuctionsInput!
    $condition: ModelAuctionsConditionInput
  ) {
    updateAuctions(input: $input, condition: $condition) {
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
export const deleteAuctions = /* GraphQL */ `
  mutation DeleteAuctions(
    $input: DeleteAuctionsInput!
    $condition: ModelAuctionsConditionInput
  ) {
    deleteAuctions(input: $input, condition: $condition) {
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
export const createMyCollection = /* GraphQL */ `
  mutation CreateMyCollection(
    $input: CreateMyCollectionInput!
    $condition: ModelMyCollectionConditionInput
  ) {
    createMyCollection(input: $input, condition: $condition) {
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
export const updateMyCollection = /* GraphQL */ `
  mutation UpdateMyCollection(
    $input: UpdateMyCollectionInput!
    $condition: ModelMyCollectionConditionInput
  ) {
    updateMyCollection(input: $input, condition: $condition) {
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
export const deleteMyCollection = /* GraphQL */ `
  mutation DeleteMyCollection(
    $input: DeleteMyCollectionInput!
    $condition: ModelMyCollectionConditionInput
  ) {
    deleteMyCollection(input: $input, condition: $condition) {
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
export const createLots = /* GraphQL */ `
  mutation CreateLots(
    $input: CreateLotsInput!
    $condition: ModelLotsConditionInput
  ) {
    createLots(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLots = /* GraphQL */ `
  mutation UpdateLots(
    $input: UpdateLotsInput!
    $condition: ModelLotsConditionInput
  ) {
    updateLots(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLots = /* GraphQL */ `
  mutation DeleteLots(
    $input: DeleteLotsInput!
    $condition: ModelLotsConditionInput
  ) {
    deleteLots(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAuctionItem = /* GraphQL */ `
  mutation CreateAuctionItem(
    $input: CreateAuctionItemInput!
    $condition: ModelAuctionItemConditionInput
  ) {
    createAuctionItem(input: $input, condition: $condition) {
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
export const updateAuctionItem = /* GraphQL */ `
  mutation UpdateAuctionItem(
    $input: UpdateAuctionItemInput!
    $condition: ModelAuctionItemConditionInput
  ) {
    updateAuctionItem(input: $input, condition: $condition) {
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
export const deleteAuctionItem = /* GraphQL */ `
  mutation DeleteAuctionItem(
    $input: DeleteAuctionItemInput!
    $condition: ModelAuctionItemConditionInput
  ) {
    deleteAuctionItem(input: $input, condition: $condition) {
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
export const createBidItemHistory = /* GraphQL */ `
  mutation CreateBidItemHistory(
    $input: CreateBidItemHistoryInput!
    $condition: ModelBidItemHistoryConditionInput
  ) {
    createBidItemHistory(input: $input, condition: $condition) {
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
export const updateBidItemHistory = /* GraphQL */ `
  mutation UpdateBidItemHistory(
    $input: UpdateBidItemHistoryInput!
    $condition: ModelBidItemHistoryConditionInput
  ) {
    updateBidItemHistory(input: $input, condition: $condition) {
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
export const deleteBidItemHistory = /* GraphQL */ `
  mutation DeleteBidItemHistory(
    $input: DeleteBidItemHistoryInput!
    $condition: ModelBidItemHistoryConditionInput
  ) {
    deleteBidItemHistory(input: $input, condition: $condition) {
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
export const createAuctionUserLimitation = /* GraphQL */ `
  mutation CreateAuctionUserLimitation(
    $input: CreateAuctionUserLimitationInput!
    $condition: ModelAuctionUserLimitationConditionInput
  ) {
    createAuctionUserLimitation(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAuctionUserLimitation = /* GraphQL */ `
  mutation UpdateAuctionUserLimitation(
    $input: UpdateAuctionUserLimitationInput!
    $condition: ModelAuctionUserLimitationConditionInput
  ) {
    updateAuctionUserLimitation(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAuctionUserLimitation = /* GraphQL */ `
  mutation DeleteAuctionUserLimitation(
    $input: DeleteAuctionUserLimitationInput!
    $condition: ModelAuctionUserLimitationConditionInput
  ) {
    deleteAuctionUserLimitation(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMySucceedBid = /* GraphQL */ `
  mutation CreateMySucceedBid(
    $input: CreateMySucceedBidInput!
    $condition: ModelMySucceedBidConditionInput
  ) {
    createMySucceedBid(input: $input, condition: $condition) {
      id
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
      bidItemHistoryID
      bidItemHistory {
        id
        bidPrice
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMySucceedBid = /* GraphQL */ `
  mutation UpdateMySucceedBid(
    $input: UpdateMySucceedBidInput!
    $condition: ModelMySucceedBidConditionInput
  ) {
    updateMySucceedBid(input: $input, condition: $condition) {
      id
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
      bidItemHistoryID
      bidItemHistory {
        id
        bidPrice
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMySucceedBid = /* GraphQL */ `
  mutation DeleteMySucceedBid(
    $input: DeleteMySucceedBidInput!
    $condition: ModelMySucceedBidConditionInput
  ) {
    deleteMySucceedBid(input: $input, condition: $condition) {
      id
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
      bidItemHistoryID
      bidItemHistory {
        id
        bidPrice
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAuctionUserNumber = /* GraphQL */ `
  mutation CreateAuctionUserNumber(
    $input: CreateAuctionUserNumberInput!
    $condition: ModelAuctionUserNumberConditionInput
  ) {
    createAuctionUserNumber(input: $input, condition: $condition) {
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
export const updateAuctionUserNumber = /* GraphQL */ `
  mutation UpdateAuctionUserNumber(
    $input: UpdateAuctionUserNumberInput!
    $condition: ModelAuctionUserNumberConditionInput
  ) {
    updateAuctionUserNumber(input: $input, condition: $condition) {
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
export const deleteAuctionUserNumber = /* GraphQL */ `
  mutation DeleteAuctionUserNumber(
    $input: DeleteAuctionUserNumberInput!
    $condition: ModelAuctionUserNumberConditionInput
  ) {
    deleteAuctionUserNumber(input: $input, condition: $condition) {
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
