<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li class="w-1/2 h-8" v-for="value in uniqueValues" :key="value">
          <input 
            :id="value" 
            v-model="selectedValues" 
            :value="value"
            type="checkbox" 
            class="mr-3"
            :data-test="value"
            @change="selectValue"
          />
          <label :for="value" data-test="value">{{value}}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import { ref } from 'vue';
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';

import { CLEAR_USER_JOB_FILTER_SELECTIONS } from '@/store/constants';

  export default {
    name: "JobFilterSidebarCheckboxGroup",
    props: {
      uniqueValues: {
        type: [Array, Set],
        required: true
      },
      mutation: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const store = useStore();
      const router = useRouter();

      const selectedValues = ref([]);

      store.subscribe((mutation) => {
        if(mutation.type === CLEAR_USER_JOB_FILTER_SELECTIONS) {
          selectedValues.value = [];
        }
      })

      const selectValue = () => {
        store.commit(props.mutation, selectedValues.value);
        router.push({ name: "JobResults" });
      }
      return { selectedValues, selectValue }
    }
  }
</script>
