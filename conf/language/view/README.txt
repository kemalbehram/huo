-------------------------------------------------------

	模板语言包,仅供application/views下的文件使用

-------------------------------------------------------

命名规则：

	·{小写controller类名：{小写action名："语言"}}

	·也可以根据views文件夹命名：{小写文件夹名（有子目录用"_"拼接）:{小写phtml文件名:"语言"}}

		若如页面某部分有分块，命名格式： [分块名称]_[內容变量名]: {}

		比如 有一個內容块是 交易数据表格展示，那表格 【排序】，【币名】 这两项命名可以为：

		TRADE_DATA_TABLE_NUM: { "cn": "排序", "en": "NUM" }, TRADE_DATA_TABLE_COIN_NAME: {"cn": "币名", "en": "coin name"}