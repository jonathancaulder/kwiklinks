/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
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
