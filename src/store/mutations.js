const HEADER_MENUCHANGE = 'HEADER_MENUCHANGE';
export default {

    [HEADER_MENUCHANGE](state, index) {
        const list1 = [{ "id": 1, 'first_nav': "个人信息", "second_nav": [{ "id": 11, "nav": "个人信息", "icon": 'el-icon-info' }, { "id": 12, "nav": "修改密码", "icon": 'el-icon-menu' }] }];
        const list2 = [{ "id": 1, 'first_nav': "机构用户", "second_nav": [{ "id": 11, "nav": "用户管理", "icon": 'el-icon-info' }, { "id": 12, "nav": "机构管理", "icon": 'el-icon-menu' }, { "id": 13, "nav": "区域管理", "icon": 'el-icon-goods' }] },
            { "id": 2, 'first_nav': "系统设置", "second_nav": [{ "id": 21, "nav": "菜单管理", "icon": 'el-icon-star-on' }, { "id": 22, "nav": "角色管理", "icon": 'el-icon-refresh' }, { "id": 23, "nav": "字典管理", "icon": 'el-icon-share' }, { "id": 4, "nav": "缓存管理", "icon": 'el-icon-question' }] },
            { "id": 3, 'first_nav': "日志查询", "second_nav": [{ "id": 31, "nav": "日志查询", "icon": 'el-icon-tickets' }, { "id": 32, "nav": "连接池监视", "icon": 'el-icon-share' }] }
        ];
        const list3 = [{ "id": 1, 'first_nav': "金牌合伙人", "second_nav": [{ "id": 11, "nav": "用户管理", "icon": 'el-icon-info' }, { "id": 12, "nav": "业绩管理", "icon": 'el-icon-menu' }, { "id": 13, "nav": "佣金管理", "icon": 'el-icon-goods' }] }, ];
        state.sidebarMenuList = index == 1 ? list1 : index == 2 ? list2 : list3;

    }

}