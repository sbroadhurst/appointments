const router = require('express-promise-router')()

const crud = function (router, cb) {
  const create = async function (req, res) {
    const { ...payload } = req.body

    // ownerId is created so we can figure out who owns the resource
    const newapt = cb.getModelInstance({ ...payload })
    await newapt.save()
    res.status(200).json({ _id: newapt._id, ...payload })
  }

  const get = async function (req, res) {
    const { id } = req.params
    const doc = await cb.getModel().findById(id)
    res.status(200).json(doc)
  }

  const getAll = async function (req, res) {
    const doc = await cb.getModel().find({}, {}, {})
    res.status(200).json({ docs: [...doc] })
  }

  const update = async function (req, res) {
    const { id } = req.params
    const { _id, ...payload } = req.body

    await cb.getModel().findOneAndUpdate({ _id: id }, { $set: { ...payload } })
    res.status(200).json(req.body)
  }

  const deleteDoc = async function (req, res) {
    const { id } = req.params
    await cb.getModel().deleteOne({ _id: id })
    res.status(200).send({ message: `Deleted ${id}` })
  }

  router.route(`${cb.getPath()}/`).post(cb.create ? cb.create : create)
  router.route(`${cb.getPath()}/all`).get(cb.getAll ? cb.getAll : getAll)
  router.route(`${cb.getPath()}/:id`).get(cb.get ? cb.get : get)
  router.route(`${cb.getPath()}/:id`).put(cb.update ? cb.update : update)
  router.route(`${cb.getPath()}/:id`).delete(cb.deleteDoc ? cb.deleteDoc : deleteDoc)
}

crud(router, {
  getModel: function () {
    return Appointment
  },
  getModelInstance: function (payload) {
    return new Appointment(payload)
  },
  getPath: function () {
    return ''
  },
})

module.exports = router
