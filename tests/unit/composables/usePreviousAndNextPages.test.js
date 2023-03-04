import usePreviousAndNextPage from "@/composables/usePreviousAndNextPages";

describe('usePreviousAndNextPage', () => {
  it('calculates page before current one', () => {
    const currentPage = { value: 8 }
    const maxPage = { value: 10 }
    const { previousPage } = usePreviousAndNextPage(currentPage, maxPage)
    expect(previousPage.value).toBe(7)
  });

  describe('when current page is the first page', () => {
    it('does not provide previous page', () => {
      const currentPage = { value: 1 }
      const maxPage = { value: 1 }
      const { previousPage } = usePreviousAndNextPage(currentPage, maxPage)
      expect(previousPage.value).toBeUndefined();
    });
  });
});
