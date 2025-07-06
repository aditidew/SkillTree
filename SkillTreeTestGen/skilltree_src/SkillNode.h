#ifndef SKILLNODE_H
#define SKILLNODE_H

#include <string>
#include <vector>

class SkillNode {
private:
    std::string name;
    std::vector<SkillNode*> children;
public:
    SkillNode(std::string name);
    ~SkillNode();
    void addChild(SkillNode* child);
    SkillNode* findNode(std::string nodeName);
    std::string getName() const;
};

#endif
