// 檢查瀏覽器是否支援 history.pushState
if (window.history && window.history.pushState) {
    // 獲取當前網址路徑
    const currentPath = window.location.pathname;
  
    // 檢查網址是否包含 'index.html'
    if (currentPath.endsWith('/index.html')) {
      // 使用 history.pushState 替換網址，移除 'index.html'
      const newPath = currentPath.replace('/index.html', '/');
      history.pushState({}, '', newPath);
    }
  
    // 監聽 popstate 事件，防止返回時重新出現 'index.html'
    window.addEventListener('popstate', function(event) {
      event.preventDefault();
      history.pushState({}, '', newPath);
    });
  }