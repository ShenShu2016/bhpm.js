/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
      id
      email
      userName
      createdAt
      updatedAt
    }
  }
`;
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
      id
      email
      userName
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
      id
      email
      userName
      createdAt
      updatedAt
    }
  }
`;
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
      owner
      createdAt
      updatedAt
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
      owner
      createdAt
      updatedAt
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createHomePageCarouse = /* GraphQL */ `
  mutation CreateHomePageCarouse(
    $input: CreateHomePageCarouseInput!
    $condition: ModelHomePageCarouseConditionInput
  ) {
    createHomePageCarouse(input: $input, condition: $condition) {
      id
      title
      sourceUrl
      description
      sourceType
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
      createdAt
      updatedAt
      homePageCarouseAuctionId
    }
  }
`;
export const updateHomePageCarouse = /* GraphQL */ `
  mutation UpdateHomePageCarouse(
    $input: UpdateHomePageCarouseInput!
    $condition: ModelHomePageCarouseConditionInput
  ) {
    updateHomePageCarouse(input: $input, condition: $condition) {
      id
      title
      sourceUrl
      description
      sourceType
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
      createdAt
      updatedAt
      homePageCarouseAuctionId
    }
  }
`;
export const deleteHomePageCarouse = /* GraphQL */ `
  mutation DeleteHomePageCarouse(
    $input: DeleteHomePageCarouseInput!
    $condition: ModelHomePageCarouseConditionInput
  ) {
    deleteHomePageCarouse(input: $input, condition: $condition) {
      id
      title
      sourceUrl
      description
      sourceType
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
      createdAt
      updatedAt
      homePageCarouseAuctionId
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
          titleEng
          descriptionEng
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
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
          titleEng
          descriptionEng
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
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
          titleEng
          descriptionEng
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAuction = /* GraphQL */ `
  mutation CreateAuction(
    $input: CreateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    createAuction(input: $input, condition: $condition) {
      id
      active
      company
      description
      auctionStartDate
      auctionEndDate
      lot {
        items {
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
        }
        nextToken
      }
      bidHistories {
        items {
          id
          bidPrice
          auctionBidHistoriesId
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
  }
`;
export const updateAuction = /* GraphQL */ `
  mutation UpdateAuction(
    $input: UpdateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    updateAuction(input: $input, condition: $condition) {
      id
      active
      company
      description
      auctionStartDate
      auctionEndDate
      lot {
        items {
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
        }
        nextToken
      }
      bidHistories {
        items {
          id
          bidPrice
          auctionBidHistoriesId
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
  }
`;
export const deleteAuction = /* GraphQL */ `
  mutation DeleteAuction(
    $input: DeleteAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    deleteAuction(input: $input, condition: $condition) {
      id
      active
      company
      description
      auctionStartDate
      auctionEndDate
      lot {
        items {
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
        }
        nextToken
      }
      bidHistories {
        items {
          id
          bidPrice
          auctionBidHistoriesId
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
  }
`;
export const createMyFavorite = /* GraphQL */ `
  mutation CreateMyFavorite(
    $input: CreateMyFavoriteInput!
    $condition: ModelMyFavoriteConditionInput
  ) {
    createMyFavorite(input: $input, condition: $condition) {
      id
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
        myFavorites {
          nextToken
        }
        lotAuctionItemId
      }
      createdAt
      updatedAt
      owner
      lotMyFavoritesId
    }
  }
`;
export const updateMyFavorite = /* GraphQL */ `
  mutation UpdateMyFavorite(
    $input: UpdateMyFavoriteInput!
    $condition: ModelMyFavoriteConditionInput
  ) {
    updateMyFavorite(input: $input, condition: $condition) {
      id
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
        myFavorites {
          nextToken
        }
        lotAuctionItemId
      }
      createdAt
      updatedAt
      owner
      lotMyFavoritesId
    }
  }
`;
export const deleteMyFavorite = /* GraphQL */ `
  mutation DeleteMyFavorite(
    $input: DeleteMyFavoriteInput!
    $condition: ModelMyFavoriteConditionInput
  ) {
    deleteMyFavorite(input: $input, condition: $condition) {
      id
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
        myFavorites {
          nextToken
        }
        lotAuctionItemId
      }
      createdAt
      updatedAt
      owner
      lotMyFavoritesId
    }
  }
`;
export const createLot = /* GraphQL */ `
  mutation CreateLot(
    $input: CreateLotInput!
    $condition: ModelLotConditionInput
  ) {
    createLot(input: $input, condition: $condition) {
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
      auctionItem {
        id
        name
        title
        description
        titleEng
        descriptionEng
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrls
        condition
        provenance
        createdAt
        updatedAt
        categoryAuctionItemsId
      }
      bidHistories {
        items {
          id
          bidPrice
          auctionBidHistoriesId
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
      createdAt
      updatedAt
      myFavorites {
        items {
          id
          createdAt
          updatedAt
          owner
          lotMyFavoritesId
        }
        nextToken
      }
      lotAuctionItemId
    }
  }
`;
export const updateLot = /* GraphQL */ `
  mutation UpdateLot(
    $input: UpdateLotInput!
    $condition: ModelLotConditionInput
  ) {
    updateLot(input: $input, condition: $condition) {
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
      auctionItem {
        id
        name
        title
        description
        titleEng
        descriptionEng
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrls
        condition
        provenance
        createdAt
        updatedAt
        categoryAuctionItemsId
      }
      bidHistories {
        items {
          id
          bidPrice
          auctionBidHistoriesId
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
      createdAt
      updatedAt
      myFavorites {
        items {
          id
          createdAt
          updatedAt
          owner
          lotMyFavoritesId
        }
        nextToken
      }
      lotAuctionItemId
    }
  }
`;
export const deleteLot = /* GraphQL */ `
  mutation DeleteLot(
    $input: DeleteLotInput!
    $condition: ModelLotConditionInput
  ) {
    deleteLot(input: $input, condition: $condition) {
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
      auctionItem {
        id
        name
        title
        description
        titleEng
        descriptionEng
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrls
        condition
        provenance
        createdAt
        updatedAt
        categoryAuctionItemsId
      }
      bidHistories {
        items {
          id
          bidPrice
          auctionBidHistoriesId
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
      createdAt
      updatedAt
      myFavorites {
        items {
          id
          createdAt
          updatedAt
          owner
          lotMyFavoritesId
        }
        nextToken
      }
      lotAuctionItemId
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
      titleEng
      descriptionEng
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrls
      condition
      provenance
      createdAt
      updatedAt
      categoryAuctionItemsId
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
      titleEng
      descriptionEng
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrls
      condition
      provenance
      createdAt
      updatedAt
      categoryAuctionItemsId
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
      titleEng
      descriptionEng
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrls
      condition
      provenance
      createdAt
      updatedAt
      categoryAuctionItemsId
    }
  }
`;
export const createBidHistory = /* GraphQL */ `
  mutation CreateBidHistory(
    $input: CreateBidHistoryInput!
    $condition: ModelBidHistoryConditionInput
  ) {
    createBidHistory(input: $input, condition: $condition) {
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
        myFavorites {
          nextToken
        }
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
export const updateBidHistory = /* GraphQL */ `
  mutation UpdateBidHistory(
    $input: UpdateBidHistoryInput!
    $condition: ModelBidHistoryConditionInput
  ) {
    updateBidHistory(input: $input, condition: $condition) {
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
        myFavorites {
          nextToken
        }
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
export const deleteBidHistory = /* GraphQL */ `
  mutation DeleteBidHistory(
    $input: DeleteBidHistoryInput!
    $condition: ModelBidHistoryConditionInput
  ) {
    deleteBidHistory(input: $input, condition: $condition) {
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
        myFavorites {
          nextToken
        }
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
export const createAuctionUserLimitation = /* GraphQL */ `
  mutation CreateAuctionUserLimitation(
    $input: CreateAuctionUserLimitationInput!
    $condition: ModelAuctionUserLimitationConditionInput
  ) {
    createAuctionUserLimitation(input: $input, condition: $condition) {
      id
      maxUserBidPrice
      limitStatus
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
      createdAt
      updatedAt
      owner
      auctionAuctionUserLimitationsId
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
      createdAt
      updatedAt
      owner
      auctionAuctionUserLimitationsId
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
      createdAt
      updatedAt
      owner
      auctionAuctionUserLimitationsId
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
      bidHistory {
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
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        lotBidHistoriesId
      }
      createdAt
      updatedAt
      owner
      mySucceedBidAuctionId
      mySucceedBidBidHistoryId
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
      bidHistory {
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
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        lotBidHistoriesId
      }
      createdAt
      updatedAt
      owner
      mySucceedBidAuctionId
      mySucceedBidBidHistoryId
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
      bidHistory {
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
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        lotBidHistoriesId
      }
      createdAt
      updatedAt
      owner
      mySucceedBidAuctionId
      mySucceedBidBidHistoryId
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
      createdAt
      updatedAt
      owner
      auctionAuctionUserNumbersId
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
      createdAt
      updatedAt
      owner
      auctionAuctionUserNumbersId
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
      createdAt
      updatedAt
      owner
      auctionAuctionUserNumbersId
    }
  }
`;
