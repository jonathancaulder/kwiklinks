/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      title
      category
      description
      email
      lat
      lon
      latLong
      phone
      price
      textNumber
      url
      ownerID
      image
      images {
        items {
          id
          title
          itemID
          picURL
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        category
        description
        email
        lat
        lon
        latLong
        phone
        price
        textNumber
        url
        ownerID
        image
        images {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      title
      itemID
      picURL
      item {
        id
        title
        category
        description
        email
        lat
        lon
        latLong
        phone
        price
        textNumber
        url
        ownerID
        image
        images {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        itemID
        picURL
        item {
          id
          title
          category
          description
          email
          lat
          lon
          latLong
          phone
          price
          textNumber
          url
          ownerID
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
