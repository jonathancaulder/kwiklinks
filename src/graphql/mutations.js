/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
