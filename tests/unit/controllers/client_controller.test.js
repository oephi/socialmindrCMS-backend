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

  describe("show()", () => {
    test("call res.json()", async () => {
      const res = {
        json: jest.fn()
      }
      const next = {
        
      }

      const clientId = 123456;

      ClientModel.findById = jest.fn().mockResolvedValue(clientId);

      await ClientController.show(null, res, next);
      expect(ClientModel.findById).toBeCalledTimes(1);
      expect(res.json).toBeCalled();
    });
  });
});

