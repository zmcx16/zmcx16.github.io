// *** projects *******************
oss_projects = {};

// Side Projects
oss_projects['AxisTradeCult'] = {
  blog_post: 'https://blog.zmcx16.moe/search/label/AxisTradeCult',
  featured: true,
  position: 2,
  background: 'AxisTradeCult_295x150.jpg'
};
oss_projects['MahoMangaDownloader'] = {
  blog_post: 'https://blog.zmcx16.moe/search/label/MahoMangaDownloader',
  featured: true,
  position: 1,
  background: 'MahoMangaDownloader_295x150.jpg'
};
oss_projects['MemoOffVocabulary'] = {
  blog_post: 'https://blog.zmcx16.moe/search/label/MemoOffVocabulary',
  featured: true,
  position: 4,
  background: 'MemoOffVocabulary_295x150.jpg'
};
oss_projects['zmcx16.github.io'] = {
  blog_post: 'https://blog.zmcx16.moe/search/label/%E5%80%8B%E4%BA%BA%E7%B6%B2%E7%AB%99%E9%96%8B%E7%99%BC',
  featured: true,
  position: 3, 
  background: 'zmcx16.github.io_295x150.jpg'
};
oss_projects['OpenAI-Gym-Hearts'] = {
  featured: true,
  position: 5,
  background: 'OpenAI-Gym-Hearts_295x150.jpg'
};
oss_projects['OpenAI-Gym-GongZhu'] = {
  featured: true,
  position: 6,
  background: 'OpenAI-Gym-GongZhu_295x150.jpg'
};
oss_projects['Misc'] = {
  featured: true,
  position: 7,
  background: 'Misc_295x150.jpg'
};

// Starred
oss_projects['electronjs.org'] = {
  subject: 'Application_Framework'
};

oss_projects['self-driving-car'] = {
  subject: 'AI_ML'
};

oss_projects['pytrader'] = {
  subject: 'Trade'
};
oss_projects['pyti'] = {
  subject: 'Trade'
};
oss_projects['Deep-Trading'] = {
  subject: 'Trade'
};
oss_projects['deep_trader'] = {
  subject: 'Trade'
};
oss_projects['MachineLearningStocks'] = {
  subject: 'Trade'
};
oss_projects['StockPricePrediction'] = {
  subject: 'Trade'
};

// ********************************
// *** orgs ***********************
Organization = function (name, repos) {
  this.name = name;
  this.repos = repos || [];
}

Organization.prototype.totalForks = function () {
  total = 0;
  this.repos.forEach(function (repo) {
    total += repo.forks;
  });

  return total;
}

Organization.prototype.totalWatchers = function () {
  total = 0;
  this.repos.forEach(function (repo) {
    total += repo.watchers;
  });

  return total;
}

Organization.prototype.forkedCount = function () {
  total = 0;
  this.repos.forEach(function (repo) {
    if (repo.fork) {
      total += 1;
    }
  });

  return total;
}

Organization.prototype.notForkedCount = function () {
  total = 0;
  this.repos.forEach(function (repo) {
    if (!repo.fork) {
      total += 1;
    }
  });

  return total;
}

Organization.prototype.featuredRepos = function () {
  featured = [];
  this.repos.forEach(function (repo) {
    if (repo.featured() && !repo.fork && repo.in_project_list()) {
      if (repo.position()) {
        featured[repo.position() - 1] = repo
      } else {
        featured.push(repo);
      }
    }
  });

  return featured;
}

Organization.prototype.deprecatedRepos = function () {
  deprecated = [];
  this.repos.forEach(function (repo) {
    if (repo.deprecated() && !repo.fork) {
      deprecated.push(repo);
    }
  });

  return deprecated;
}


Organization.prototype.forkedRepos = function () {
  forked = [];
  this.repos.forEach(function (repo) {
    if (repo.fork) {
      forked.push(repo);
    }
  });

  return forked;
}

Organization.prototype.regularRepos = function (subject) {
  regular = [];
  this.repos.forEach(function (repo) {
    if (!repo.fork && !repo.featured() && !repo.deprecated() && repo.in_project_list() && repo.subject() == subject) {
      regular.push(repo);
    }
  });

  return regular;
}

Organization.prototype.addReposToContainer = function (container, repos) {
  repos.forEach(function (repo, i) {
    container.append(repo.getContainer(i + 1));
  });
}
// ********************************

// *** repos **********************
Repository = function (repo) {
  // attributes
  this.name = repo.name;
  this.language = repo.language;
  this.url = repo.html_url;
  this.description = repo.description;
  this.fork = repo.fork;
  this.watchers = repo.watchers;
  this.forks = repo.forks;

  //only for virtual container
  this.new_tab = repo.new_tab;
  this.on_click = repo.on_click;
}

Repository.prototype.in_project_list = function () {
  return oss_projects[this.name];
}

Repository.prototype.subject = function () {
  if (oss_projects[this.name] && oss_projects[this.name].subject) {
    return oss_projects[this.name].subject;
  }
}

Repository.prototype.blogPost = function () {
  if (oss_projects[this.name] && oss_projects[this.name].blog_post) {
    return oss_projects[this.name].blog_post;
  }
}

Repository.prototype.featured = function () {
  return oss_projects[this.name] && oss_projects[this.name].featured;
}

Repository.prototype.deprecated = function () {
  return oss_projects[this.name] && oss_projects[this.name].deprecated;
}

Repository.prototype.position = function () {
  if (oss_projects[this.name] && oss_projects[this.name].position) {
    return oss_projects[this.name].position;
  }
}

Repository.prototype.logo = function () {
  if (oss_projects[this.name] && oss_projects[this.name].logo) {
    return oss_projects[this.name].logo;
  }
}

Repository.prototype.background = function () {
  if (oss_projects[this.name] && oss_projects[this.name].background) {
    return oss_projects[this.name].background;
  }
}

Repository.prototype.classes = function () {
  if (this.featured()) {
    return 'featured-project';
  } else if (this.deprecated()) {
    return 'deprecated-project';
  }
}

Repository.prototype.getBlogLink = function () {
  if (this.blogPost()) {
    return '<a href="' + this.blogPost() + '" target="_blank"><span class="octicon octicon-file-text"></span> Blog post</a> ';
  }
}

Repository.prototype.getContainer = function (index) {
  var last = '';
  if (!this.featured() && index % 4 == 0) {
    last = 'last-in-row'
  }

  return [
    '<div class="project island-light island-stack island ', this.language, ' ', this.classes(), ' ', last, '">',
    this.featuredImage(),
    this.repoContent(),
    this.bottomLinks(),
    '</div>'
  ].join('');
}

Repository.prototype.featuredImage = function () {
  if (this.featured()) {
    return [
      '<div class="island-item featured-image">',
      '<img src="/img/', this.background(), '">',
      '</div>'
    ].join('');
  }
}

Repository.prototype.headerLogo = function () {
  if (this.logo()) {
    return '<img src="/img/' + this.logo() + '" height="21px" width="26px" class="logo"> ';
  }
}

Repository.prototype.repoContent = function () {

  var tab = " target=\"_blank\"";
  if (typeof this.new_tab !== 'undefined' && !this.new_tab) {
    tab = " ";
  }

  var on_click = "";

  var href = ' href="' + this.url + '"';
  if (this.on_click) {
    on_click = " onclick='" + this.on_click + "'";
    href = ' ';
  }

  return [
    '<div class="island-item">',
    '<h3>',
    '<a ', href, tab, on_click, '>', this.headerLogo(), this.name, '</a>',
    '</h3>',
    '<div class="repo-info">',
    '<span><i class="octicon octicon-star"></i> ', this.watchers, '</span> ',
    '<span><i class="octicon octicon-repo-forked"></i> ', this.forks, '</span>',
    '<span class="language ', this.language, '">', this.language, '</span>',
    '</div>',
    '<p>', this.description, '</p>',
    '</div>'
  ].join('');
}

Repository.prototype.bottomLinks = function () {
  if (this.blogPost()) {
    return [
      '<div class="island-item bottom-links">',
      this.getBlogLink(),
      '</div>'
    ].join('');
  }
}
// ********************************

// *** loader *********************
var repos_completed_count = 3;
var repos_loaded_count = 0;
var repos_loaded_completed = false;

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

  repoData.forEach(function (repoDatum) {
    org.repos.push(new Repository(repoDatum));
  });

  repos_loaded_count++;
}

var org = new Organization('zmcx16');
org.repos = [];
var load_repos_timeId=0;

function loadAllRepositoryData() {

  if( repos_loaded_count >= repos_completed_count){
    
    org.addReposToContainer($('.projects .featured'), org.featuredRepos());
    org.addReposToContainer($('.projects .not-featured .AI_ML'), org.regularRepos('AI_ML'));
    org.addReposToContainer($('.projects .not-featured .Trade'), org.regularRepos('Trade'));
    org.addReposToContainer($('.projects .not-featured .Application_Framework'), org.regularRepos('Application_Framework'));

    repos_loaded_completed = true;
    clearInterval(load_repos_timeId);
  }
}

$(document).ready(function () {

  loadRepositoryDataFromJson('zmcx16_virtual_repos.json', loadRepositoryData);
  getGithubData('https://api.github.com/users/zmcx16/repos', 'zmcx16_repos.json', loadRepositoryData, loadRepositoryDataFromJson);
  getGithubData('https://api.github.com/users/zmcx16/starred', 'zmcx16_starred.json', loadRepositoryData, loadRepositoryDataFromJson);

  load_repos_timeId = setInterval(function () { loadAllRepositoryData() }, 100);
});
// ********************************

// *** opensource-site ************
$(document).ready(function () {
  $('.titled-subnav a').click(function (e) {
    e.preventDefault();

    $('.titled-subnav a').removeClass('active');
    $('.projects').hide();
    $(e.target).addClass('active');

    var container = ".projects." + $(e.target).data('container');
    $(container).show();
  });

  $('body').on('click', '.project .island-item', function () {
    if ($(this).attr('class').indexOf("bottom-links") > -1) { return }
    var target = $(this).parent().find('h3 a')[0];
    if (target.outerHTML.indexOf('onclick') >= 0) {
      target.onclick();
    } else {
      window.open(target.href, '_blank');
    }

  });

  $('body').on('click', '.project .bottom-links', function () {
    window.open($(this).find('a')[0].href, '_blank');
  });
});
// ********************************
