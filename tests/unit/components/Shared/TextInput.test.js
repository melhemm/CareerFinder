import { mount } from "@vue/test-utils";
import TextInput from '../../../../src/components/Shared/TextInput.vue';

describe('TextInput', () => { 
  it('communicates that user has entered character', () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: ""
      },
    })
    const input = wrapper.find("input");
    input.setValue("N")
    input.setValue("Mo")
    input.setValue("Scow")
    const message = wrapper.emitted()["update:modelValue"]
    expect(message).toEqual([["N"], ["Mo"], ["Scow"]])
  });
})
