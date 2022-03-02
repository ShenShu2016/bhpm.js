export const onCreateBidItemHistory = /* GraphQL */ `
  subscription OnCreateBidItemHistory {
    onCreateBidItemHistory {
      id
      bidPrice
      auctionsID
      createdAt
      updatedAt
      owner
    }
  }
`;
