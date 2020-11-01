const Query = {
  collections(parent, args, { prisma }) {
    return prisma.collection.findMany();
  },
  async collection(parent, args, { prisma }) {
    const collection = await prisma.collection.findOne({
      where: {
        id: args.id,
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    return collection;
  },
  async getCollectionsByTitle(parent, args, { prisma }) {
    const collection = await prisma.collection.findOne({
      where: {
        title: { equals: args.title, mode: 'insensitive' },
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    return collection;
  },
  items(parent, args, { prisma }) {
    return prisma.item.findMany();
  },
  async item(parent, args, { prisma }) {
    const item = await prisma.item.findOne({
      where: {
        id: args.id,
      },
    });

    if (!item) {
      throw new Error('Item not found');
    }

    return item;
  },
};

export default Query;
