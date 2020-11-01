const Query = {
  collections(parent, args, { prisma }) {
    return prisma.collection.findMany({
      include: {
        items: true,
      },
    });
  },
  async collection(parent, args, { prisma }) {
    const collection = await prisma.collection.findOne({
      where: {
        id: args.id,
      },
      include: {
        items: true,
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    return collection;
  },
  async getCollectionsByTitle(parent, args, { prisma }) {
    const collection = await prisma.collection.findFirst({
      where: {
        title: { equals: args.title, mode: 'insensitive' },
      },
      include: {
        items: true,
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    return collection;
  },
  items(parent, args, { prisma }) {
    return prisma.item.findMany({
      include: {
        collection: true,
      },
    });
  },
  async item(parent, args, { prisma }) {
    const item = await prisma.item.findOne({
      where: {
        id: args.id,
      },
      include: {
        collection: true,
      },
    });

    if (!item) {
      throw new Error('Item not found');
    }

    return item;
  },
};

export default Query;
