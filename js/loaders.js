var repos_completed_count = 3;
var repos_loaded_count = 0;

function getGithubData(url, local_file_path, loadRepositoryData, loadRepositoryDataFromJson) {
  $.ajax({
    url: url,
    async: true,
    success: function (data, textStatus, xhr) {
      if (data.length > 0) {
        loadRepositoryData(data);
      }
      else {
        console.log('call ' + url + ' failed: ' + xhr);
        loadRepositoryDataFromJson(local_file_path, loadRepositoryData);
      }
    },
    error: function (data, textStatus, xhr) {
      console.log('call ' + url + ' failed: ' + xhr);
      loadRepositoryDataFromJson(local_file_path, loadRepositoryData);      
    },    
    timeout: 10000 //in milliseconds
  });

}

function loadRepositoryDataFromJson(local_file_path, loadRepositoryData) {

  $.ajax({
    url: local_file_path,
    async: true,
    success: function (data, textStatus, xhr) {
      if (data.length > 0) {
        loadRepositoryData(data);
      }
      else {
        console.log('load ' + local_file_path + ' failed: ' + xhr);
        load_count++;
      }
    },
    timeout: 10000 //in milliseconds
  });

};

function loadRepositoryData(repoData) {

  var org = new Organization('zmcx16');
  org.repos = [];

  repoData.forEach(function (repoDatum) {
    org.repos.push(new Repository(repoDatum));
  });

  org.addReposToContainer($('.projects .featured'), org.featuredRepos());
  org.addReposToContainer($('.projects .not-featured .AI_ML'), org.regularRepos('AI_ML'));
  org.addReposToContainer($('.projects .not-featured .Trade'), org.regularRepos('Trade'));

  repos_loaded_count++;
}

$(document).ready(function () {
  loadRepositoryDataFromJson('zmcx16_virtual_repos.json', loadRepositoryData);
  getGithubData('https://api.github.com/users/zmcx16/repos', 'zmcx16_repos.json', loadRepositoryData, loadRepositoryDataFromJson);
  getGithubData('https://api.github.com/users/zmcx16/starred', 'zmcx16_starred.json', loadRepositoryData, loadRepositoryDataFromJson);
});
