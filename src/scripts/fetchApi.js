export const fetchShowMoreGoods = async (curPage) => {
  try {
    const response = await fetch('/api/showMoreGoods.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ curPage }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Increment the current page for the next fetch
    window.currentPage++;
    return data;
  } catch (error) {
    console.error('Fetch API error:', error);
    throw error;
  }
};

export const fetchEditCart = async (cartData) => {
  try {
    const response = await fetch('/api/add2cart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('response data', data);
    return data;
  } catch (error) {
    console.error('Fetch API error:', error);
    throw error;
  }
};
