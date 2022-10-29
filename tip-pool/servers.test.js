describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add new entries when user input is empty', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });
  it('should update server table in DOM', () => {
    submitServerInfo();
    updateServerTable();

    let tableData = document.querySelectorAll('#serverTable tbody tr td');
    expect(tableData[0].textContent).toEqual('Alice');
    expect(tableData[1].textContent).toEqual('$0.00');
  })


  afterEach(function () {
    // teardown logic
    serverNameInput.value = '';
    serverId = 0;
    allServers = {};
    updateServerTable();
  });
})