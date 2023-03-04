import { useRoute } from "vue-router";
jest.mock("vue-router");

import useCurrentPage from "@/composables/useCurrentPage";

describe('useCurrentPage', () => {
  describe('when query para,s include page', () => {
    it('returns page', () => {
      useRoute.mockReturnValue({
        query: {
          page: "5"
        }
      });
      const result = useCurrentPage();
      expect(result.value).toBe(5)
    });
    
  });

  describe('when query para,s exclude page', () => {
    it('default to page 1', () => {
      useRoute.mockReturnValue({
        query: {}
      });
      const result = useCurrentPage();
      expect(result.value).toBe(1)
    });
    
  });
});