const { Product } = require('../model/product')

const read = async (req, res) => {
    res.send(await Product.find());
};

const create = async (req, res) => {
    productObject = new Product({
        name: req.body.name,
        price: req.body.price
    })

    await productObject.save();

    const { _id, name, price } = productObject;

    res.send({
      _id,
      name,
      price
  });
};

const remove = async (req, res) => {
    await Product.deleteOne({ _id: req.body._id });
    res.send('removed');
};

const update = async (req, res) => {
    await Product.updateOne({ _id: req.body._id });
    res.send('updated');
};

module.exports = {
    read,
    create,
    remove,
    update
}