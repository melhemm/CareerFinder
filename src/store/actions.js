import getJobs from '@/api/getJobs';
import getDegrees from '@/api/getDegrees';
import { FETCH_JOBS, RECIVE_JOBS, FETCH_DEGREES, RECEVIE_DEGREES  } from './constants';

const actions = {
  [FETCH_JOBS]: async(context) => {
    const jobListings =  await getJobs()
    context.commit(RECIVE_JOBS, jobListings)
  },
  [FETCH_DEGREES]: async(context) => {
    const degrees =  await getDegrees()
    context.commit(RECEVIE_DEGREES, degrees)
  }
}

export default actions