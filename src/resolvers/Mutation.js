const Mutation = {
  createCollection(parent, args, { prisma }) {
    return prisma.collection.create({
      data: args.data,
    });
  },
  async deleteCollection(parent, args, { prisma }) {
    const collection = await prisma.collection.findOne({
      where: {
        id: args.id,
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    return prisma.collection.delete({
      where: { id: args.id },
    });
  },
  async updateCollection(parent, args, { prisma }) {
    const collection = await prisma.collection.findOne({
      where: {
        id: args.id,
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    return prisma.collection.update({
      where: { id: args.id },
      data: args.data,
    });
  },
  async createItem(parent, args, { prisma }) {
    const { name, imageUrl, price, collection: collectionId } = args.data;

    const collection = await prisma.collection.findOne({
      where: {
        id: collectionId,
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    return prisma.item.create({
      data: {
        name,
        price,
        imageUrl,
        collection: { connect: { id: collectionId } },
      },
    });
  },
  async deleteItem(parent, args, { prisma }) {
    const item = await prisma.item.findOne({
      where: {
        id: args.id,
      },
    });

    if (!item) {
      throw new Error('Item not found');
    }

    return prisma.item.delete({
      where: { id: args.id },
    });
  },
  async updateItem(parent, args, { prisma }) {
    const item = await prisma.item.findOne({
      where: {
        id: args.id,
      },
    });

    if (!item) {
      throw new Error('Item not found');
    }

    return prisma.item.update({
      where: { id: args.id },
      data: args.data,
    });
  },
};

export default Mutation;
