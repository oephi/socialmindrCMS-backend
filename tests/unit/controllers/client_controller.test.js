const ClientController = require("../../../controllers/client_controller");
const ClientModel = require("../../../database/models/client_model");

describe("ClientController", () => {
  describe("index()", () => {
    test("call res.json()", async () => {
      const res = {
        json: jest.fn()
      }

      const clients = [];

      ClientModel.find = jest.fn().mockResolvedValue(clients);

      await ClientController.index(null, res);
      expect(ClientModel.find).toBeCalledTimes(1);
      expect(res.json).toBeCalled();
    });
  });
});

