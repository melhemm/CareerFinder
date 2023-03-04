import axios from "axios";
jest.mock("axios")
import getJobs from '@/api/getJobs';

describe('getJobs', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: "1",
          title: "Java Developer"
        }
      ]
    })
  })

  it("fetches jobs that can apply to", async() => {
   await getJobs()
   expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
  })

  it('extacts jobs from response', async() => {
    const data =  await getJobs();
    expect(data).toEqual([
      {
        id: "1",
        title: "Java Developer"
      }
    ]);
  });
  
});
